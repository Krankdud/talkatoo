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
                    <s>{{ name }}<small class="ml-2 text-muted">{{ description }}</small></s>
                </div>
                <div v-else>
                    {{ name }}<small class="ml-2 text-muted">{{ description }}</small>
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
        useSeedMoons: false,
        useStoryMoons: false,
        useWarpMoons: false,
        useHintArtMoons: false,
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
            this.onSubmit();
        }
    },
    methods: {
        onSubmit: function() {
            Math.seedrandom(this.seed);
            this.kingdoms = [];

            for (i = 0; i < moonList.kingdoms.length; i++) {
                var kingdom = moonList.kingdoms[i];
                var moonCount = 0;
                var kingdomObj = {
                    name: kingdom.name,
                    moons: []
                };
                var moonPrerequisites = new Set()

                var storyMoonCount = 0;
                var numOfStoryMoons = Math.floor((kingdom.storyMoons.length + 1) * Math.random());
                for (j = 0; j < kingdom.storyMoons.length; j++) {
                    var moon = kingdom.storyMoons[j];
                    if (moon.required || storyMoonCount < numOfStoryMoons) {
                        if (this.useStoryMoons) {
                            kingdomObj.moons.push({
                                name: moon.name,
                                description: moon.description
                            });
                            
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

                var moonIndices = [];
                for (j = 0; j < kingdom.moons.length; j++) {
                    moonIndices.push(j);
                }
                shuffle(moonIndices);

                for (j = 0; j < moonIndices.length && moonCount < kingdom.requiredMoons; j++) {
                    var index = moonIndices[j];
                    var moon = kingdom.moons[index];
                    if ((!this.useSeedMoons && moon.seed == true)
                        || (!this.useWarpMoons && moon.warp == true)
                        || (!this.useHintArtMoons && moon.hintArt == true)) {
                        continue;
                    }
                    if (moon.multimoon == true && moonCount + 3 > kingdom.requiredMoons) {
                        continue;
                    }
                    if (moon.backtrack == true || moon.postgame == true || moon.tourist == true) {
                        continue;
                    }
                    if (moon.prerequisite && !moonPrerequisites.has(moon.prerequisite)) {
                        continue;
                    }

                    kingdomObj.moons.push({
                        name: moon.name,
                        description: moon.description
                    });
                    moonPrerequisites.add(moon.name);

                    if (moon.multimoon == true) {
                        moonCount += 3;
                    } else {
                        moonCount += 1;
                    }
                }

                this.kingdoms.push(kingdomObj);
            }

            this.shareLink = [location.protocol, '//', location.host, location.pathname, '?seed=', this.encodeSettings()].join('');
            this.generated = true;
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
            return btoa(settingsBits.toString(16) + this.seed);
        },

        decodeSettings: function(encodedSettings) {
            var decodedSettings = atob(encodedSettings);
            var settingsBits = parseInt(decodedSettings.substring(0, 1), 16);
            var seed = decodedSettings.substring(1);
            return {
                seed: seed,
                useStoryMoons: (settingsBits & 1) > 0,
                useSeedMoons: (settingsBits & 2) > 0,
                useWarpMoons: (settingsBits & 4) > 0,
                useHintArtMoons: (settingsBits & 8) > 0
            }
        }
    },

})