// Fisher-Yates shuffle algorithm from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function pad(s, len) {
    if (s.length >= len) {
        return s;
    }
    return "0".repeat(len - s.length) + s;
}

Vue.component('moon', {
    data: function() {
        return {
            checked: false,
        }
    },
    props: ['name', 'description'],
    template: `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" v-model="checked" value="">
    <label class="form-check-label">
    <div class="text-muted" v-if="checked">
    <s>
    {{ name }}
    <br class="d-md-none" v-if="description" />
    <small class="ml-md-2 text-muted" v-if="description">{{ description }}</small>
    </s>
    </div>
    <div v-else>
    {{ name }}
    <br class="d-md-none" v-if="description" />
    <small class="ml-md-2 text-muted" v-if="description">{{ description }}</small>
    </div>
    </label>
    </div>
    `
})

var vm = new Vue({
    el: '#talkatoo',
    data: {
        kingdoms: [],
        generated: false,
        seed: '',
        shareLink: '',
        goal: 'anyPercent',
        useSeedMoons: false,
        useStoryMoons: false,
        useWarpMoons: false,
        useHintArtMoons: false,
        ignoreRequirements: false
    },
    mounted: function() {
        let urlParams = new URLSearchParams(window.location.search);
        let seed = urlParams.get('seed');
        
        if (seed) {
            var settings = this.decodeSettings(seed)
            this.seed = settings.seed;
            this.useStoryMoons = settings.useStoryMoons;
            this.useSeedMoons = settings.useSeedMoons;
            this.useWarpMoons = settings.useWarpMoons;
            this.useHintArtMoons = settings.useHintArtMoons;
            this.ignoreRequirements = settings.ignoreRequirements;
            this.onSubmit();
        }
    },
    methods: {
        onSubmit: function() {
            Math.seedrandom(this.seed);
            
            if (this.goal == 'anyPercent') {
                // Ruined Kingdom isn't included in the list, so moon count is 121 instead of 124.
                var totalMoons = this.generateMoonDistribution(moonList.anyPercentKingdoms, 121)
                this.generateMoonList(moonList.anyPercentKingdoms, totalMoons);
            } else if (this.goal == 'darkSide') {
                var totalMoons = this.generateMoonDistribution(moonList.darkSideKingdoms, 250)
                this.generateMoonList(moonList.darkSideKingdoms, totalMoons);
            } else if (this.goal == 'darkerSide') {
                var totalMoons = this.generateMoonDistribution(moonList.darkSideKingdoms, 500)
                this.generateMoonList(moonList.darkerSideKingdoms, totalMoons);
            }
            
            this.shareLink = [location.protocol, '//', location.host, location.pathname, '?seed=', this.encodeSettings()].join('');
            this.generated = true;
        },
        
        generateMoonList: function(kingdoms, totalMoons) {
            this.kingdoms = [];
            for (var i = 0; i < kingdoms.length; i++) {
                var kingdom = moonList.kingdoms[kingdoms[i]];
                var moonCount = 0;
                var totalMoonsInKingdom = totalMoons[i];
                var kingdomView = {
                    name: kingdom.name,
                    moons: []
                };
                var moonPrerequisites = new Set()
                
                moonCount = this.randomizeStoryMoons(kingdom, kingdomView, moonPrerequisites, this.goal != "anyPercent");

                // Calculate the amount of moons in the midgame and postgame, and confirm that there are enough moons
                // in each section to satisfy the number of moons to get in the kingdom.
                var availableMidgameMoons = moonCount + this.getAvailableMoons(kingdom.moons, moonPrerequisites);
                var availablePostgameMoons = this.getAvailableMoons(kingdom.postgameMoons, moonPrerequisites);
                var midgameMoons = kingdom.requiredMoons + Math.floor((totalMoonsInKingdom - kingdom.requiredMoons) * Math.random());
                if (midgameMoons > availableMidgameMoons) {
                    midgameMoons = availableMidgameMoons;
                }
                if (totalMoonsInKingdom - midgameMoons > availablePostgameMoons) {
                    midgameMoons = totalMoonsInKingdom - availablePostgameMoons;
                }

                moonCount = this.randomizeMoons(kingdomView, kingdom.moons, moonPrerequisites, moonCount, midgameMoons)
                moonCount = this.randomizeMoons(kingdomView, kingdom.postgameMoons, moonPrerequisites, moonCount, totalMoonsInKingdom, '🌛')
                
                this.kingdoms.push(kingdomView);
            }
        },
        
        randomizeStoryMoons: function(kingdom, kingdomView, moonPrerequisites, requireWorldPeace) {
            var moonCount = 0;
            var storyMoonCount = 0;
            var numOfStoryMoons = Math.floor((kingdom.storyMoons.length + 1) * Math.random());
            
            // Get random story moons if requirements are ignored.
            // Otherwise, pull a number of story moons to add and add them in order.
            if (this.ignoreRequirements && this.useStoryMoons) {
                moonCount = this.randomizeMoons(kingdomView, kingdom.storyMoons, moonPrerequisites, moonCount, numOfStoryMoons, '📖');
            } else {
                for (var i = 0; i < kingdom.storyMoons.length; i++) {
                    var moon = kingdom.storyMoons[i];
                    if (requireWorldPeace || moon.required || storyMoonCount < numOfStoryMoons) {
                        if (this.useStoryMoons) {
                            this.addMoonToKingdom(moon, kingdomView, '📖');
                            
                            if (moon.multimoon == true) {
                                moonCount += 3;
                            } else {
                                moonCount += 1;
                            }
                            storyMoonCount += 1;
                        }
                        moonPrerequisites.add(moon.name);
                    } else {
                        break;
                    }
                }
            }
            return moonCount;
        },
        
        randomizeMoons: function(kingdomView, moons, moonPrerequisites, moonCount, totalMoons, suffix) {
            var moonIndices = [];
            for (var i = 0; i < moons.length; i++) {
                moonIndices.push(i);
            }
            shuffle(moonIndices);
            
            for (var i = 0; i < moonIndices.length && moonCount < totalMoons; i++) {
                var index = moonIndices[i];
                var moon = moons[index];

                if (!this.canAddMoon(moon, moonPrerequisites)) {
                    continue;
                }
                
                if (suffix) {
                    this.addMoonToKingdom(moon, kingdomView, suffix);
                } else if (moon.worldPeace) {
                    this.addMoonToKingdom(moon, kingdomView, '️🌎');
                } else {
                    this.addMoonToKingdom(moon, kingdomView);
                }
                moonPrerequisites.add(moon.name);
                
                if (moon.multimoon == true) {
                    moonCount += 3;
                } else {
                    moonCount += 1;
                }
            }
            
            return moonCount
        },
        
        generateMoonDistribution: function(kingdoms, maxMoons) {
            var totalMoons = [];
            var moonCount = 0;
            for (var i = 0; i < kingdoms.length; i++) {
                var kingdom = moonList.kingdoms[kingdoms[i]];
                var moons = kingdom.requiredMoons || 0;
                moonCount += moons;
                totalMoons.push(moons);
            }
            // Randomly add moons until we've reached the total number of moons
            while (moonCount < maxMoons) {
                for (var i = 0; i < kingdoms.length && moonCount < maxMoons; i++) {
                    var kingdom = moonList.kingdoms[kingdoms[i]];
                    var availableMoons = this.getTotalAvailableMoons(kingdom);
                    var moons = Math.min(maxMoons - moonCount, Math.floor((availableMoons - totalMoons[i]) * Math.random()));
                    moonCount += moons;
                    totalMoons[i] += moons;
                }
            }
            return totalMoons;
        },
        
        getTotalAvailableMoons: function(kingdom) {
            // Assume kingdom has world peace since this only applies to Dark Side and Darker Side
            var storyMoons = new Set()
            var storyMoonCount = 0;
            for (var i = 0; i < kingdom.storyMoons.length; i++) {
                var moon = kingdom.storyMoons[i];
                storyMoonCount += moon.multimoon ? 3 : 1;
                storyMoons.add(moon);
            }
            return storyMoonCount + this.getAvailableMoons(kingdom.moons, storyMoons) + this.getAvailableMoons(kingdom.postgameMoons, storyMoons);
        },

        getAvailableMoons: function(moons, prerequisites) {
            var count = 0;
            for (var i = 0; i < moons.length; i++) {
                var moon = moons[i];
                count += this.canAddMoon(moon, prerequisites) ? 1 : 0;
            }
            return count;
        },
        
        canAddMoon: function(moon, moonPrerequisites) {
            if ((!this.useSeedMoons && moon.seed == true)
            || (!this.useWarpMoons && moon.warp == true)
            || (!this.useHintArtMoons && moon.hintArt == true)) {
                return false;
            }
            if (moon.backtrack == true || moon.tourist == true || moon.achievement == true) {
                return false;
            }
            if (!this.ignoreRequirements && moon.prerequisite && !moonPrerequisites.has(moon.prerequisite)) {
                if (Array.isArray(moon.prerequisite)) {
                    var hasMoon = false;
                    for (var i = 0; i < moon.prerequisite.length; i++) {
                        hasMoon = hasMoon || moonPrerequisites.has(moon.prerequisite)
                    }
                    if (!hasMoon) {
                        return false;
                    }
                } else if (!moonPrerequisites.has(moon.prerequisite)) {
                    return false;
                }
            }
            return true;
        },
        
        randomSeed: function() {
            const now = new Date();
            Math.seedrandom(now.getTime());
            this.seed = Math.random().toString(36).substring(2);
        },
        
        encodeSettings: function() {
            // Encode the settings by turning the boolean options into a hexadecimal value,
            // then append the seed to the string. Encode to base64 afterwards.
            var settingsBits = 0;
            settingsBits += this.useStoryMoons ? 1 : 0
            settingsBits += this.useSeedMoons ? 2 : 0
            settingsBits += this.useWarpMoons ? 4 : 0
            settingsBits += this.useHintArtMoons ? 8 : 0
            settingsBits += this.ignoreRequirements ? 16 : 0
            return btoa(pad(settingsBits.toString(16), 4) + this.seed);
        },
        
        decodeSettings: function(encodedSettings) {
            var decodedSettings = atob(encodedSettings);
            var settingsBits = parseInt(decodedSettings.substring(0, 4), 16);
            var seed = decodedSettings.substring(4);
            return {
                seed: seed,
                useStoryMoons: (settingsBits & 1) > 0,
                useSeedMoons: (settingsBits & 2) > 0,
                useWarpMoons: (settingsBits & 4) > 0,
                useHintArtMoons: (settingsBits & 8) > 0,
                ignoreRequirements: (settingsBits & 16) > 0,
            }
        },
        
        addMoonToKingdom: function(moon, kingdom, suffix = '') {
            var name = moon.name;
            if (suffix != '') {
                name = [name, suffix].join(' ');
            }
            kingdom.moons.push({
                name: name,
                description: moon.description
            });
        }
    },
    
})