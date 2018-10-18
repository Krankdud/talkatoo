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

var vm = new Vue({
    el: '#talkatoo',
    data: {
        kingdoms: [],
        generated: false,
        seed: '',
        shareLink: '',
        useSeedMoons: false,
        useStoryMoons: false,
    },
    mounted: function() {
        let urlParams = new URLSearchParams(window.location.search);
        let seed = urlParams.get('seed');
        let useSeedMoons = urlParams.get('useSeedMoons');
        let useStoryMoons = urlParams.get('useStoryMoons');

        if (useSeedMoons) {
            this.useSeedMoons = useSeedMoons == 1;
        }
        if (useStoryMoons) {
            this.useStoryMoons = useStoryMoons == 1;
        }
        if (seed) {
            this.seed = seed;
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

                var moonIndices = [];
                for (j = 0; j < kingdom.moons.length; j++) {
                    moonIndices.push(j);
                }
                shuffle(moonIndices);

                for (j = 0; j < moonIndices.length && moonCount < kingdom.required_moons; j++) {
                    var index = moonIndices[j];
                    if (!this.useSeedMoons && kingdom.moons[index].seed == true) {
                        continue;
                    }
                    if (!this.useStoryMoons && kingdom.moons[index].story == true) {
                        continue;
                    }
                    if (kingdom.moons[index].backtrack == true || kingdom.moons[index].postgame == true || kingdom.moons[index].tourist == true || kingdom.moons[index].hint_art == true || kingdom.moons[index].warp == true) {
                        continue;
                    }

                    kingdomObj.moons.push(kingdom.moons[index].name);

                    if (kingdom.moons[index].multimoon == true) {
                        moonCount += 3;
                    } else {
                        moonCount += 1;
                    }
                }

                this.kingdoms.push(kingdomObj);
            }

            this.shareLink = [location.protocol, '//', location.host, location.pathname].join('') + '?seed=' + this.seed + '&useSeedMoons=' + (this.useSeedMoons ? 1 : 0) + '&useStoryMoons=' + (this.useStoryMoons ? 1 : 0);
            this.generated = true;
        }
    }
})