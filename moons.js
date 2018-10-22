var moonList = {
    anyPercentKingdoms: [
        "cascade",
        "sand",
        "lake",
        "wooded",
        "lost",
        "metro",
        "snow",
        "seaside",
        "luncheon",
        "bowser"
    ],
    kingdoms: {
        cascade: {
            name: "Cascade Kingdom",
            requiredMoons: 5,
            storyMoons: [
                {
                    name: "Our First Power Moon",
                    required: true
                },
                {
                    name: "Multi Moon Atop the Falls",
                    multimoon: true,
                    prerequisite: "Our First Power Moon",
                    required: true
                },
            ],
            moons: [
                {
                    name: "Chomp Through the Rocks",
                    prerequisite: "Our First Power Moon"
                },
                {
                    name: "Behind the Waterfall",
                    prerequisite: "Our First Power Moon"
                },
                {
                    name: "On Top of the Rubble",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Treasure of the Waterfall Basin",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Above a High Cliff",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Across the Floating Isles",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Cascade Kingdom Timer Challenge 1",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Cascade Kingdom Timer Challenge 2",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Good Morning, Captain Toad!",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Dinosaur Nest: Big Cleanup!",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Dinosaur Nest: Running Wild!",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Nice Shot with the Chain Chomp!",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Very Nice Shot with the Chain Chomp!",
                    prerequisite: "Nice Shot with the Chain Chomp!",
                    worldPeace: true
                },
                {
                    name: "Past the Chasm Lifts",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Hidden Chasm Passage",
                    prerequisite: "Multi Moon Atop the Falls",
                    worldPeace: true
                },
                {
                    name: "Secret Path to Fossil Falls!",
                    warp: true
                },
                {
                    name: "A Tourist in the Cascade Kingdom",
                    tourist: true
                },
                {
                    name: "Rolling Rock by the Falls",
                    backtrack: true
                },
                {
                    name: "Peach in the Cascade Kingdom",
                    postgame: true
                },
                {
                    name: "Cascade Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "Caveman Cave-Fan",
                    postgame: true
                },
                {
                    name: "Shopping in Fossil Falls",
                    backtrack: true
                },
                {
                    name: "Sphynx Traveling to the Waterfall",
                    postgame: true
                },
                {
                    name: "Bottom of the Waterfall Basin",
                    postgame: true
                },
                {
                    name: "Just a Hat, Skip, and a Jump",
                    postgame: true
                },
                {
                    name: "Treasure Under the Cliff",
                    postgame: true
                },
                {
                    name: "Next to the Stone Arch",
                    postgame: true
                },
                {
                    name: "Guarded by a Colossal Fossil",
                    postgame: true
                },
                {
                    name: "Under the Old Electrical Pole",
                    postgame: true
                },
                {
                    name: "Under the Ground",
                    postgame: true
                },
                {
                    name: "Inside the Busted Fossil",
                    postgame: true
                },
                {
                    name: "Caught Hopping at the Waterfall!",
                    postgame: true
                },
                {
                    name: "Taking Notes: Hurry Upward",
                    postgame: true
                },
                {
                    name: "Cascade Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "Across the Mysterious Clouds",
                    postgame: true
                },
                {
                    name: "Atop a Wall Among the Clouds",
                    postgame: true
                },
                {
                    name: "Across the Gusty Bridges",
                    postgame: true
                },
                {
                    name: "Flying Far Away from Gusty Bridges",
                    postgame: true
                }
            ]
        },
        sand: {
            name: "Sand Kingdom",
            requiredMoons: 16,
            storyMoons: [
                {
                    name: "Atop the Highest Tower",
                },
                {
                    name: "Moon Shards in the Sand",
                    prerequisite: "Atop the Highest Tower"
                },
                {
                    name: "Showdown on the Inverted Pyramid",
                    multimoon: true
                },
                {
                    name: "The Hole in the Desert",
                    multimoon: true,
                    prerequisite: "Showdown on the Inverted Pyramid"
                }
            ],
            moons: [
                {
                    name: "Overlooking the Desert Town"
                },
                {
                    name: "Alcove in the Ruins"
                },
                {
                    name: "On the Leaning Pillar"
                },
                {
                    name: "Hidden Room in the Flowing Sands"
                },
                {
                    name: "Secret of the Mural"
                },
                {
                    name: "Secret of the Inverted Mural",
                    prerequisite: "Moon Shards in the Sand"
                },
                {
                    name: "On Top of the Stone Archway"
                },
                {
                    name: "From a Crate in the Ruins"
                },
                {
                    name: "On the Lone Pillar"
                },
                {
                    name: "On the Statue's Tail",
                    prerequisite: "Moon Shards in the Sand"
                },
                {
                    name: "Hang Your Hat on the Fountain",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Where the Birds Gather"
                },
                {
                    name: "Top of a Dune"
                },
                {
                    name: "Lost in the Luggage"
                },
                {
                    name: "Bullet Bill Breakthrough",
                    prerequisite: "Showdown on the Inverted Pyramid"
                },
                {
                    name: "Inside a Block Is a Hard Place"
                },
                {
                    name: "Bird Traveling the Desert"
                },
                {
                    name: "Bird Traveling the Wastes",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "The Lurker Under the Stone",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "The Treasure of Jaxi Ruins"
                },
                {
                    name: "Desert Gardening: Plaza Seed",
                    seed: true
                },
                {
                    name: "Desert Gardening: Ruins Seed",
                    seed: true
                },
                {
                    name: "Desert Gardening: Seed on the Cliff",
                    seed: true
                },
                {
                    name: "Sand Kingdom Timer Challenge 1",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Sand Kingdom Timer Challenge 2",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Sand Kingdom Timer Challenge 3",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Found in the Sand! Good Dog!",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Taking Notes: Jump on the Palm"
                },
                {
                    name: "Herding Sheep in the Dunes"
                },
                {
                    name: "Fishing in the Oasis",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Love in the Heart of the Desert",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Among the Five Cactuses"
                },
                {
                    name: "You're Quite a Catch, Captain Toad!",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Jaxi Reunion!",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Welcome Back, Jaxi!",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Wandering Cactus"
                },
                {
                    name: "Sand Quiz: Wonderful!"
                },
                {
                    name: "Shopping in Tostarena"
                },
                {
                    name: "Employees Only"
                },
                {
                    name: "Sand Kingdom Slots"
                },
                {
                    name: "Walking the Desert!"
                },
                {
                    name: "Hidden Room in the Inverted Pyramid",
                    prerequisite: "Moon Shards in the Sand"
                },
                {
                    name: "Underground Treasure Chest",
                    prerequisite: "Showdown on the Inverted Pyramid"
                },
                {
                    name: "Goomba Tower Assembly",
                    prerequisite: "Showdown on the Inverted Pyramid"
                },
                {
                    name: "Under the Mummy's Curse",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Ice Cave Treasure"
                },
                {
                    name: "Sphynx's Treasure Vault"
                },
                {
                    name: "A Rumble from the Sandy Floor"
                },
                {
                    name: "Dancing with New Friends"
                },
                {
                    name: "The Invisible Maze"
                },
                {
                    name: "Skull Sign in the Transparent Maze"
                },
                {
                    name: "The Bullet Bill Maze: Break Through!"
                },
                {
                    name: "The Bullet Bill Maze: Side Path"
                },
                {
                    name: "Jaxi Driver"
                },
                {
                    name: "Jaxi Stunt Driving"
                },
                {
                    name: "Strange Neighborhood",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Above a Strange Neighborhood",
                    prerequisite: "The Hole in the Desert",
                    worldPeace: true
                },
                {
                    name: "Secret Path to Tostarena!",
                    warp: true
                },
                {
                    name: "Found with Sand Kingdom Art",
                    hintArt: true,
                    postgame: true
                },
                {
                    name: "Jammin' in the Sand Kingdom",
                    postgame: true
                },
                {
                    name: "Hat-and-Seek: In the Sand",
                    postgame: true
                },
                {
                    name: "Sand Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "Binding Band Returned",
                    postgame: true
                },
                {
                    name: "'Round-the-World Tourist",
                    postgame: true,
                    tourist: true
                },
                {
                    name: "Peach in the Sand Kingdom",
                    postgame: true
                },
                {
                    name: "Mighty Leap from the Palm Tree!",
                    postgame: true
                },
                {
                    name: "On the North Pillar",
                    postgame: true
                },
                {
                    name: "Into the Flowing Sands",
                    postgame: true
                },
                {
                    name: "In the Skies Above the Canyon",
                    postgame: true
                },
                {
                    name: "Island in the Poison Swamp",
                    postgame: true
                },
                {
                    name: "An Invisible Gleam",
                    postgame: true
                },
                {
                    name: "On the Eastern Pillar",
                    postgame: true
                },
                {
                    name: "Caught Hopping in the Desert!",
                    postgame: true
                },
                {
                    name: "Poster Cleanup",
                    postgame: true
                },
                {
                    name: "Taking Notes: Running Down",
                    postgame: true
                },
                {
                    name: "Taking Notes: In the Wall Painting",
                    postgame: true
                },
                {
                    name: "Love at the Edge of the Desert",
                    postgame: true
                },
                {
                    name: "More Walking in the Desert!",
                    postgame: true
                },
                {
                    name: "Sand Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "Where the Transparent Platforms End",
                    postgame: true
                },
                {
                    name: "Jump Onto the Transparent Lift",
                    postgame: true
                },
                {
                    name: "Colossal Ruins: Dash! Jump!",
                    postgame: true
                },
                {
                    name: "Sinking Colossal Ruins: Hurry!",
                    postgame: true
                },
                {
                    name: "Through the Freezing Waterway",
                    postgame: true
                },
                {
                    name: "Freezing Waterway: Hidden Room",
                    postgame: true
                }
            ]
        },
        lake: {
            name: "Lake Kingdom",
            requiredMoons: 8,
            storyMoons: [
                {
                    name: "Broodals Over the Lake",
                    multimoon: true
                }
            ],
            moons: [
                {
                    name: "Dorrie-Back Rider"
                },
                {
                    name: "Cheep Cheep Crossing"
                },
                {
                    name: "End of the Hidden Passage"
                },
                {
                    name: "What's in the Box?"
                },
                {
                    name: "On the Lakeshore"
                },
                {
                    name: "From the Broken Pillar"
                },
                {
                    name: "Treasure in the Spiky Waterway"
                },
                {
                    name: "Lake Gardening: Spiky Passage Seed",
                    seed: true,
                    prerequisite: "Broodals Over the Lake"
                },
                {
                    name: "Lake Kingdom Timer Challenge 1",
                    prerequisite: "Broodals Over the Lake",
                    worldPeace: true
                },
                {
                    name: "Lake Kingdom Timer Challenge 2",
                    prerequisite: "Broodals Over the Lake",
                    worldPeace: true
                },
                {
                    name: "Moon Shards in the Lake"
                },
                {
                    name: "Taking Notes: Dive and Swim"
                },
                {
                    name: "Taking Notes: In the Cliffside"
                },
                {
                    name: "Lake Fishing",
                    prerequisite: "Broodals Over the Lake",
                    worldPeace: true
                },
                {
                    name: "I Met a Lake Cheep Cheep!",
                    prerequisite: "Broodals Over the Lake",
                    worldPeace: true
                },
                {
                    name: "Our Secret Little Room"
                },
                {
                    name: "Let's Go Swimming, Captain Toad!"
                },
                {
                    name: "Shopping in Lake Lamode"
                },
                {
                    name: "A Successful Repair Job",
                    prerequisite: "Broodals Over the Lake",
                    worldPeace: true
                },
                {
                    name: "I Feel Underdressed"
                },
                {
                    name: "Unzip the Chasm"
                },
                {
                    name: "Super-Secret Zipper"
                },
                {
                    name: "Jump, Grab, Cling, and Climb"
                },
                {
                    name: "Jump, Grab, and Climb Some More"
                },
                {
                    name: "Secret Path to Lake Lamode!",
                    warp: true
                },
                {
                    name: "Found with Lake Kingdom Art",
                    hintArt: true
                },
                {
                    name: "Taxi Flying Through Lake Lamode",
                    postgame: true
                },
                {
                    name: "That Trendy \"Pirate\" Look",
                    postgame: true
                },
                {
                    name: "Space Is \"In\" Right Now",
                    postgame: true
                },
                {
                    name: "That \"Old West\" Style",
                    postgame: true
                },
                {
                    name: "Lake Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "Peach in the Lake Kingdom",
                    postgame: true
                },
                {
                    name: "Behind the Floodgate",
                    postgame: true
                },
                {
                    name: "High-Flying Leap",
                    postgame: true
                },
                {
                    name: "Deep, Deep Down",
                    postgame: true
                },
                {
                    name: "Rooftop of the Water Plaza",
                    postgame: true
                },
                {
                    name: "Bird Traveling Over the Lake",
                    postgame: true
                },
                {
                    name: "Love by the Lake",
                    postgame: true
                },
                {
                    name: "Lake Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "Waves of Poison: Hoppin' Over",
                    postgame: true
                },
                {
                    name: "Waves of Poison: Hop to It!",
                    postgame: true
                }
            ]
        },
        wooded: {
            name: "Wooded Kingdom",
            requiredMoons: 16,
            storyMoons: [
                {
                    name: "Road to Sky Garden",
                },
                {
                    name: "Flower Thieves of Sky Garden",
                    multimoon: true,
                    prerequisite: "Road to Sky Garden"
                },
                {
                    name: "Path to the Secret Flower Field",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Defend the Secret Flower Field!",
                    multimoon: true,
                    prerequisite: "Path to the Secret Flower Field"
                },
            ],
            moons: [
                {
                    name: "Behind the Rock Wall",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Back Way Up the Mountain",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Rolling Rock in the Woods"
                },
                {
                    name: "Caught Hopping in the Forest!"
                },
                {
                    name: "Thanks for the Charge!",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Atop the Tall Tree"
                },
                {
                    name: "Tucked Away Inside the Tunnel"
                },
                {
                    name: "Over the Cliff's Edge"
                },
                {
                    name: "The Nut 'Round the Corner"
                },
                {
                    name: "Climb the Cliff to Get the Nut"
                },
                {
                    name: "The Nut in the Red Maze"
                },
                {
                    name: "The Nut at the Dead End"
                },
                {
                    name: "Cracked Nut on a Crumbling Tower"
                },
                {
                    name: "The Nut that Grew on the Tall Fence",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Fire in the Cave"
                },
                {
                    name: "Hey Out There, Captain Toad!",
                    prerequisite: "Defend the Secret Flower Field!",
                    worldPeace: true
                },
                {
                    name: "Love in the Forest Ruins",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Inside a Rock in the Forest",
                    prerequisite: "Defend the Secret Flower Field!",
                    worldPeace: true
                },
                {
                    name: "Shopping in Steam Gardens"
                },
                {
                    name: "Nut Planted in the Tower"
                },
                {
                    name: "Stretching Your Legs"
                },
                {
                    name: "Spinning-Platforms Treasure",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Make the Secret Flower Field Bloom",
                    prerequisite: "Defend the Secret Flower Field!",
                    worldPeace: true
                },
                {
                    name: "Rolling Rock in the Deep Woods"
                },
                {
                    name: "Glowing in the Deep Woods"
                },
                {
                    name: "Past the Peculiar Pipes"
                },
                {
                    name: "By the Babbling Brook in Deep Woods"
                },
                {
                    name: "The Hard Rock in Deep Woods"
                },
                {
                    name: "A Treasure Made from Coins"
                },
                {
                    name: "Beneath the Roots of the Moving Tree"
                },
                {
                    name: "Deep Woods Treasure Trap"
                },
                {
                    name: "Exploring for Treasure"
                },
                {
                    name: "Wooded Kingdom Timer Challenge 1",
                    prerequisite: "Defend the Secret Flower Field!",
                    worldPeace: true
                },
                {
                    name: "Wooded Kingdom Timer Challenge 2",
                    prerequisite: "Defend the Secret Flower Field!",
                    worldPeace: true
                },
                {
                    name: "Flooding Pipeway"
                },
                {
                    name: "Flooding Pipeway Ceiling Secret"
                },
                {
                    name: "Wandering in the Fog",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Nut Hidden in the Fog",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Flower Road Run",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Flower Road Reach",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Elevator Escalation",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Elevator Blind Spot",
                    prerequisite: "Flower Thieves of Sky Garden"
                },
                {
                    name: "Walking on Clouds",
                    prerequisite: "Defend the Secret Flower Field!",
                    worldPeace: true
                },
                {
                    name: "Above the Clouds",
                    prerequisite: "Defend the Secret Flower Field!",
                    worldPeace: true
                },
                {
                    name: "Secret Path to the Steam Gardens!",
                    warp: true
                },
                {
                    name: "Found with Wooded Kingdom Art",
                    hintArt: true
                },
                {
                    name: "Swing Around Secret Flower Field",
                    postgame: true
                },
                {
                    name: "Jammin' in the Wooded Kingdom",
                    postgame: true
                },
                {
                    name: "Wooded Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "Peach in the Wooded Kingdom",
                    postgame: true
                },
                {
                    name: "High Up in the Cave",
                    postgame: true
                },
                {
                    name: "Lost in the Tall Trees",
                    postgame: true
                },
                {
                    name: "Looking Down on the Goombas",
                    postgame: true
                },
                {
                    name: "High Up on a Rock Wall",
                    postgame: true
                },
                {
                    name: "The Nut in the Robot Storeroom",
                    postgame: true
                },
                {
                    name: "Above the Iron Mountain Path",
                    postgame: true
                },
                {
                    name: "The Nut Under the Observation Deck",
                    postgame: true
                },
                {
                    name: "Bird Traveling the Forest",
                    postgame: true
                },
                {
                    name: "Invader in the Sky Garden",
                    postgame: true
                },
                {
                    name: "Hot, Hot, Hot from the Campfire",
                    postgame: true
                },
                {
                    name: "Wooded Kingdom Timer Challenge 3",
                    postgame: true
                },
                {
                    name: "Moon Shards in the Forest",
                    postgame: true
                },
                {
                    name: "Taking Notes: On Top of the Wall",
                    postgame: true
                },
                {
                    name: "Taking Notes: Stretching",
                    postgame: true
                },
                {
                    name: "Wooded Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "I Met an Uproot!",
                    postgame: true
                },
                {
                    name: "Invisible Road: Danger!",
                    postgame: true
                },
                {
                    name: "Invisible Road: Hidden Room",
                    postgame: true
                },
                {
                    name: "Herding Sheep Above the Forest Fog",
                    postgame: true
                },
                {
                    name: "Herding Sheep on the Iron Bridge",
                    postgame: true
                },
                {
                    name: "Down and Back Breakdown Road",
                    postgame: true
                },
                {
                    name: "Below Breakdown Road",
                    postgame: true
                }
            ]
        },
        lost: {
            name: "Lost Kingdom",
            requiredMoons: 10,
            storyMoons: [],
            moons: [
                {
                    name: "Atop a Propeller Pillar"
                },
                {
                    name: "Below the Cliff's Edge"
                },
                {
                    name: "Inside the Stone Cage"
                },
                {
                    name: "On a Tree in the Swamp"
                },
                {
                    name: "Over the Fuzzies, Above the Swamp"
                },
                {
                    name: "Avoiding Fuzzies Inside the Wall"
                },
                {
                    name: "Inside the Rising Stone Pillar"
                },
                {
                    name: "Enjoying the View of Forgotten Isle"
                },
                {
                    name: "On the Mountain Road"
                },
                {
                    name: "A Propeller Pillar's Secret"
                },
                {
                    name: "Wrecked Rock Block"
                },
                {
                    name: "A Butterfly's Treasure"
                },
                {
                    name: "Caught Hopping in the Jungle!",
                    backtrack: true
                },
                {
                    name: "Cave Gardening"
                },
                {
                    name: "Moon Shards in the Jungle"
                },
                {
                    name: "Peeking Out from Under the Bridge"
                },
                {
                    name: "Twist 'n' Turn-Up Treasure"
                },
                {
                    name: "Soaring Over Forgotten Isle!"
                },
                {
                    name: "The Caged Gold"
                },
                {
                    name: "Get Some Rest, Captain Toad"
                },
                {
                    name: "Shopping on Forgotten Isle"
                },
                {
                    name: "Taxi Flying Through Forgotten Isle",
                    postgame: true
                },
                {
                    name: "I Met a Tropical Wiggler!",
                    postgame: true
                },
                {
                    name: "Lost Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "Peach in the Lost Kingdom",
                    postgame: true
                },
                {
                    name: "The Shining Fruit",
                    postgame: true
                },
                {
                    name: "Jump Down to the Top of a Tree",
                    postgame: true
                },
                {
                    name: "Line It Up, Blow It Up",
                    postgame: true
                },
                {
                    name: "Taking Notes: Stretch and Shrink",
                    postgame: true
                },
                {
                    name: "Lost Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "Lost Kingdom Timer Challenge",
                    postgame: true
                },
                {
                    name: "Stretch and Traverse the Jungle",
                    postgame: true
                },
                {
                    name: "Aglow in the Jungle",
                    postgame: true
                },
                {
                    name: "Chasing Klepto",
                    postgame: true
                },
                {
                    name: "Extremely Hot Bath",
                    postgame: true
                }
            ]
        },
        metro: {
            name: "Metro Kingdom",
            requiredMoons: 20,
            storyMoons: [
                {
                    name: "New Donk City's Pest Problem",
                    multimoon: true,
                    required: true
                },
                {
                    name: "Drummer on Board!",
                },
                {
                    name: "Guitarist on Board!",
                },
                {
                    name: "Bassist on Board!",
                },
                {
                    name: "Trumpeter on Board!",
                },
                {
                    name: "Powering Up the Station",
                    prerequisite: ["Drummer on Board!", "Guitarist on Board!", "Bassist on Board!", "Trumpeter on Board!"]
                },
            ],
            moons: [
                {
                    name: "A Traditional Festival!",
                    story: true,
                    multimoon: true,
                    prerequisite: "Powering Up the Station"
                },
                {
                    name: "Inside an Iron Girder"
                },
                {
                    name: "Swaying in the Breeze"
                },
                {
                    name: "Girder Sandwich"
                },
                {
                    name: "Glittering Above the Pool"
                },
                {
                    name: "Dizzying Heights"
                },
                {
                    name: "Secret Girder Tunnel!"
                },
                {
                    name: "Who Piled Garbage on This?"
                },
                {
                    name: "Hidden in the Scrap"
                },
                {
                    name: "Left at the Café?"
                },
                {
                    name: "Caught Hopping on a Building!",
                    prerequisite: "A Traditional Festival!",
                    worldPeace: true
                },
                {
                    name: "How Do They Take Out the Trash?"
                },
                {
                    name: "Metro Kingdom Timer Challenge 1",
                    prerequisite: "A Traditional Festival!",
                    worldPeace: true
                },
                {
                    name: "Metro Kingdom Timer Challenge 2",
                    prerequisite: "A Traditional Festival!",
                    worldPeace: true
                },
                {
                    name: "City Gardening: Building Planter",
                    seed: true
                },
                {
                    name: "City Gardening: Plaza Planter",
                    seed: true
                },
                {
                    name: "City Gardening: Rooftop Planter",
                    seed: true
                },
                {
                    name: "How You Doin', Captain Toad?"
                },
                {
                    name: "Free Parking: Rooftop Hop"
                },
                {
                    name: "Bench Friends"
                },
                {
                    name: "Shopping in New Donk City"
                },
                {
                    name: "Metro Kingdom Slots"
                },
                {
                    name: "Jump-Rope Hero"
                },
                {
                    name: "Jump-Rope Genius"
                },
                {
                    name: "Remotely Captured Car"
                },
                {
                    name: "RC Car Pro!",
                    prerequisite: "Remotely Captured Car"
                },
                {
                    name: "Taking Notes: In the Private Room"
                },
                {
                    name: "City Hall Lost & Found"
                },
                {
                    name: "Sewer Treasure",
                    prerequisite: ["Drummer on Board!", "Guitarist on Board!", "Bassist on Board!", "Trumpeter on Board!"]
                },
                {
                    name: "Celebrating in the Streets!",
                    prerequisite: "A Traditional Festival!"
                },
                {
                    name: "Pushing Through the Crowd"
                },
                {
                    name: "High Over the Crowd"
                },
                {
                    name: "Rewiring the Neighborhood"
                },
                {
                    name: "Off the Beaten Wire"
                },
                {
                    name: "Moon Shards Under Siege"
                },
                {
                    name: "Sharpshooting Under Siege"
                },
                {
                    name: "Inside the Rotating Maze"
                },
                {
                    name: "Outside the Rotating Maze"
                },
                {
                    name: "Hanging from a High-Rise"
                },
                {
                    name: "Vaulting from a High-Rise"
                },
                {
                    name: "Bullet Billding"
                },
                {
                    name: "One Man's Trash..."
                },
                {
                    name: "Motor Scooter: Escape!"
                },
                {
                    name: "Big Jump: Escape!"
                },
                {
                    name: "Secret Path to New Donk City!",
                    warp: true
                },
                {
                    name: "A Tourist in the Metro Kingdom!",
                    tourist: true
                },
                {
                    name: "Found with Metro Kingdom Art",
                    hintArt: true
                },
                {
                    name: "Bird Traveling in the City",
                    postgame: true
                },
                {
                    name: "Mario Signs His Name",
                    postgame: true
                },
                {
                    name: "Surprise Clown!",
                    postgame: true
                },
                {
                    name: "A Request from the Mayor",
                    postgame: true
                },
                {
                    name: "Jammin' in the Metro Kingdom",
                    postgame: true
                },
                {
                    name: "Sphynx in the City",
                    postgame: true
                },
                {
                    name: "Free Parking: Leap of Faith",
                    postgame: true
                },
                {
                    name: "Metro Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "Hat-and-Seek: In the City",
                    postgame: true
                },
                {
                    name: "Powering Up the Power Plant",
                    postgame: true
                },
                {
                    name: "Up on the Big Screen",
                    postgame: true
                },
                {
                    name: "Down Inside the Big Screen",
                    postgame: true
                },
                {
                    name: "Peach in the Metro Kingdom",
                    postgame: true
                },
                {
                    name: "Hanging Between Buildings",
                    postgame: true
                },
                {
                    name: "Crossing Lines",
                    postgame: true
                },
                {
                    name: "Out of a Crate in the City",
                    postgame: true
                },
                {
                    name: "Bird Traveling in the Park",
                    postgame: true
                },
                {
                    name: "Metro Kingdom Timer Challenge 3",
                    postgame: true
                },
                {
                    name: "Found in the Park! Good Dog!",
                    postgame: true
                },
                {
                    name: "RC Car Champ!",
                    postgame: true
                },
                {
                    name: "Metro Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "Hat-and-Seek: In the Crowd",
                    postgame: true
                },
                {
                    name: "Scaling Pitchblack Mountain",
                    postgame: true
                },
                {
                    name: "Reaching Pitchblack Island",
                    postgame: true
                },
                {
                    name: "Swinging Scaffolding: Jump!",
                    postgame: true
                },
                {
                    name: "Swinging Scaffolding: Break!",
                    postgame: true
                },
                {
                    name: "Motor Scooter Daredevil!",
                    postgame: true
                },
                {
                    name: "Full-Throttle Scooting!",
                    postgame: true
                }
            ]
        },
        snow: {
            name: "Snow Kingdom",
            requiredMoons: 10,
            storyMoons: [
                {
                    name: "The Icicle Barrier",
                },
                {
                    name: "The Ice Wall Barrier",
                },
                {
                    name: "The Gusty Barrier",
                },
                {
                    name: "The Snowy Mountain Barrier",
                },
                {
                    name: "The Bound Bowl Grand Prix",
                    multimoon: true
                },
            ],
            moons: [
                {
                    name: "Entrance to Shiveria"
                },
                {
                    name: "Behind Snowy Mountain"
                },
                {
                    name: "Shining in the Snow in Town"
                },
                {
                    name: "Atop a Blustery Arch"
                },
                {
                    name: "Caught Hopping in the Snow!",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "The Shiverian Treasure Chest"
                },
                {
                    name: "Treasure in the Ice Wall"
                },
                {
                    name: "Snow Kingdom Timer Challenge 1",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Snow Kingdom Timer Challenge 2",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Moon Shards in the Snow",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Taking Notes: Snow Path Dash",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Fishing in the Glacier!",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Ice-Dodging Goomba Stack"
                },
                {
                    name: "Captain Toad is Chilly!"
                },
                {
                    name: "I'm Not Cold!",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Shopping in Shiveria"
                },
                {
                    name: "Walking on Ice!",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Snowline Circuit Class S",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Dashing Over Cold Water!",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Dashing Above and Beyond!",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Jump 'n' Swim in the Freezing Water",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Freezing Water Near the Ceiling",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Blowing and Sliding",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Moon Shards in the Cold Room"
                },
                {
                    name: "Slip Behind the Ice"
                },
                {
                    name: "Spinning Above the Clouds",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "High-Altitude Spinning",
                    prerequisite: "The Bound Bowl Grand Prix",
                    worldPeace: true
                },
                {
                    name: "Secret Path to Shiveria!",
                    warp: true
                },
                {
                    name: "Found with Snow Kingdom Art",
                    hintArt: true
                },
                {
                    name: "Snow Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "Hat-and-Seek in the Snow",
                    postgame: true
                },
                {
                    name: "Peach in the Snow Kingdom",
                    postgame: true
                },
                {
                    name: "Shining on High",
                    postgame: true
                },
                {
                    name: "Above the Freezing Fish Pond",
                    postgame: true
                },
                {
                    name: "Ice Floe Swimming",
                    postgame: true
                },
                {
                    name: "Icy Jump Challenge",
                    postgame: true
                },
                {
                    name: "Forgotten in the Holding Room",
                    postgame: true
                },
                {
                    name: "It Popped Out of the Ice",
                    postgame: true
                },
                {
                    name: "Deep in the Cold, Cold Water",
                    postgame: true
                },
                {
                    name: "Water Pooling in the Crevasse",
                    postgame: true
                },
                {
                    name: "Squirming Under Ice",
                    postgame: true
                },
                {
                    name: "Snow Kingdom Timer Challenge 3",
                    postgame: true
                },
                {
                    name: "Stacked-Up Ice Climb",
                    postgame: true
                },
                {
                    name: "I Met a Snow Cheep Cheep!",
                    postgame: true
                },
                {
                    name: "Even More Walking on Ice!",
                    postgame: true
                },
                {
                    name: "Snow Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "Iceburn Circuit Class A",
                    postgame: true
                },
                {
                    name: "Iceburn Circuit Class S",
                    postgame: true
                },
                {
                    name: "Running the Flower Road",
                    postgame: true
                },
                {
                    name: "Looking Back on the Flower Road",
                    postgame: true
                }
            ]
        },
        seaside: {
            name: "Seaside Kingdom",
            requiredMoons: 10,
            storyMoons: [
                {
                    name: "The Stone Pillar Seal",
                },
                {
                    name: "The Lighthouse Seal",
                },
                {
                    name: "The Hot Spring Seal",
                },
                {
                    name: "The Seal Above the Canyon",
                },
                {
                    name: "The Glass Is Half Full!",
                    multimoon: true,
                    prerequisite: ["The Stone Pillar Seal", "The Lighthouse Seal", "The Hot Spring Seal", "The Seal Above the Canyon"]
                }
            ],
            moons: [
                {
                    name: "On the Cliff Overlooking the Beach"
                },
                {
                    name: "Ride the Jetstream"
                },
                {
                    name: "Ocean-Bottom Maze: Treasure"
                },
                {
                    name: "Ocean-Bottom Maze: Hidden Room"
                },
                {
                    name: "Underwater Highway Tunnel"
                },
                {
                    name: "Shh! It's a Shortcut!"
                },
                {
                    name: "Gap in the Ocean Trench"
                },
                {
                    name: "Slip Through the Nesting Spot"
                },
                {
                    name: "Merci, Dorrie!"
                },
                {
                    name: "Bonjour, Dorrie!",
                    prerequisite: "The Glass Is Half Full!",
                    worldPeace: true
                },
                {
                    name: "Under a Dangerous Ceiling"
                },
                {
                    name: "What the Waves Left Behind"
                },
                {
                    name: "The Back Canyon: Excavate!"
                },
                {
                    name: "Bubblaine Northern Reaches"
                },
                {
                    name: "Wriggling on the Sandy Bottom"
                },
                {
                    name: "Glass Palace Treasure Chest"
                },
                {
                    name: "Treasure Trap Hidden in the Inlet"
                },
                {
                    name: "Sea Gardening: Inlet Seed",
                    seed: true
                },
                {
                    name: "Sea Gardening: Canyon Seed",
                    seed: true
                },
                {
                    name: "Sea Gardening: Hot-Spring Seed",
                    seed: true
                },
                {
                    name: "Sea Gardening: Ocean Trench Seed",
                    seed: true
                },
                {
                    name: "Seaside Kingdom Timer Challenge 1"
                },
                {
                    name: "Seaside Kingdom Timer Challenge 2",
                    prerequisite: "The Glass Is Half Full!",
                    worldPeace: true
                },
                {
                    name: "Found on the Beach! Good Dog!",
                    prerequisite: "The Glass Is Half Full!",
                    worldPeace: true
                },
                {
                    name: "Moon Shards in the Sea"
                },
                {
                    name: "Taking Notes: Ocean Surface Dash"
                },
                {
                    name: "Love by the Seaside"
                },
                {
                    name: "Lighthouse Leaper",
                    prerequisite: "The Glass Is Half Full!",
                    worldPeace: true
                },
                {
                    name: "Good Job, Captain Toad!"
                },
                {
                    name: "Ocean Quiz: Good!"
                },
                {
                    name: "Shopping in Bubblaine"
                },
                {
                    name: "Beach Volleyball: Champ",
                    prerequisite: "The Glass Is Half Full!",
                    worldPeace: true
                },
                {
                    name: "Beach Volleyball: Hero of the Beach!",
                    prerequisite: "Beach Volleyball: Champ",
                    worldPeace: true
                },
                {
                    name: "Looking Back in the Dark Waterway"
                },
                {
                    name: "The Sphynx's Underwater Vault"
                },
                {
                    name: "A Rumble on the Seaside Floor"
                },
                {
                    name: "A Relaxing Dance"
                },
                {
                    name: "Wading in the Cloud Sea"
                },
                {
                    name: "Sunken Treasure in the Cloud Sea"
                },
                {
                    name: "Fly Through the Narrow Valley"
                },
                {
                    name: "Treasure Chest in the Narrow Valley"
                },
                {
                    name: "Hurry and Stretch"
                },
                {
                    name: "Stretch on the Side Path"
                },
                {
                    name: "Secret Path to Bubblaine!",
                    warp: true
                },
                {
                    name: "Found with Seaside Kingdom Art",
                    hintArt: true
                },
                {
                    name: "Seaside Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "Peach in the Seaside Kingdom",
                    postgame: true
                },
                {
                    name: "Above the Parasol: Catch!",
                    postgame: true
                },
                {
                    name: "What Shines Inside the Glass",
                    postgame: true
                },
                {
                    name: "A Fine Detail on the Glass",
                    postgame: true
                },
                {
                    name: "Underwater Highway West: Explore!",
                    postgame: true
                },
                {
                    name: "Underwater Highway East: Explore!",
                    postgame: true
                },
                {
                    name: "Rapid Ascent on Hot Spring Island",
                    postgame: true
                },
                {
                    name: "A Light Next to the Lighthouse",
                    postgame: true
                },
                {
                    name: "The Tall Rock Shelf in the Deep Ocean",
                    postgame: true
                },
                {
                    name: "At the Base of the Lighthouse",
                    postgame: true
                },
                {
                    name: "Bird Traveling Over the Ocean",
                    postgame: true
                },
                {
                    name: "Caught Hopping at Glass Palace!",
                    postgame: true
                },
                {
                    name: "Seaside Kingdom Timer Challenge 3",
                    postgame: true
                },
                {
                    name: "Taking Notes: Ocean-Bottom Maze",
                    postgame: true
                },
                {
                    name: "Taking Notes in the Sea",
                    postgame: true
                },
                {
                    name: "Seaside Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "Aim! Poke!",
                    postgame: true
                },
                {
                    name: "Poke! Roll!",
                    postgame: true
                },
                {
                    name: "The Spinning Maze: Search!",
                    postgame: true
                },
                {
                    name: "The Spinning Maze: Open!",
                    postgame: true
                }
            ]
        },
        luncheon: {
            name: "Luncheon Kingdom",
            requiredMoons: 18,
            storyMoons: [
                {
                    name: "The Broodals Are After Some Cookin'",
                    required: true
                },
                {
                    name: "Under the Cheese Rocks",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Big Pot on the Volcano: Dive In!",
                    multimoon: true,
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Climb Up the Cascading Magma",
                    prerequisite: "Big Pot on the Volcano: Dive In!"
                },
                {
                    name: "Cookatiel Showdown!",
                    multimoon: true,
                    prerequisite: "Climb Up the Cascading Magma"
                }
            ],
            moons: [
                {
                    name: "Piled on the Salt"
                },
                {
                    name: "Lurking in the Pillar's Shadow"
                },
                {
                    name: "Atop the Jutting Crag",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Is This an Ingredient Too?!",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Atop a Column in a Row",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Surrounded by Tall Mountains",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Island of Salt Floating in the Lava",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Overlooking a Bunch of Ingredients",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Light the Lantern on the Small Island",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Golden Turnip Recipe 1",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Golden Turnip Recipe 2",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Golden Turnip Recipe 3",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Luncheon Kingdom Timer Challenge 1"
                },
                {
                    name: "Luncheon Kingdom Timer Challenge 2",
                    prerequisite: "Big Pot on the Volcano: Dive In!"
                },
                {
                    name: "Luncheon Kingdom Timer Challenge 3",
                    prerequisite: "Climb Up the Cascading Magma",
                },
                {
                    name: "Beneath the Rolling Vegetables",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "All the Cracks Are Fixed",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Taking Notes: Swimming in Magma",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Love Above the Lava"
                },
                {
                    name: "Shopping in Mount Volbono",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Luncheon Kingdom Slots",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "A Strong Simmer",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "An Extreme Simmer",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Alcove Behind the Pillars of Magma",
                    prerequisite: "Big Pot on the Volcano: Dive In!"
                },
                {
                    name: "Treasure Beneath the Cheese Rocks",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Light the Two Flames",
                    prerequisite: "Big Pot on the Volcano: Dive In!"
                },
                {
                    name: "Light the Far-Off Lanterns",
                    prerequisite: "Climb Up the Cascading Magma",
                },
                {
                    name: "Bon Appétit, Captain Toad!",
                    prerequisite: "Climb Up the Cascading Magma",
                },
                {
                    name: "The Treasure Chest in the Veggies",
                    prerequisite: "Big Pot on the Volcano: Dive In!"
                },
                {
                    name: "Caught Hopping at the Volcano!",
                    prerequisite: "Cookatiel Showdown!",
                    worldPeace: true
                },
                {
                    name: "Taking Notes: Big Pot Swim",
                    prerequisite: "Cookatiel Showdown!",
                    worldPeace: true
                },
                {
                    name: "Magma Swamp: Floating and Sinking",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Corner of the Magma Swamp",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Magma Narrow Path",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Crossing to the Magma",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Fork Flickin' to the Summit",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Fork Flickin' Detour",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Excavate 'n' Search the Cheese Rocks",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Climb the Cheese Rocks",
                    prerequisite: "The Broodals Are After Some Cookin'"
                },
                {
                    name: "Spinning Athletics End Goal",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Taking Notes: Spinning Athletics",
                    prerequisite: "Under the Cheese Rocks"
                },
                {
                    name: "Secret Path to Mount Volbono!",
                    warp: true
                },
                {
                    name: "A Tourist in the Luncheon Kingdom!",
                    tourist: true
                },
                {
                    name: "Found with Luncheon Kingdom Art",
                    hintArt: true
                },
                {
                    name: "The Rooftop Lantern",
                    postgame: true
                },
                {
                    name: "Jammin' in the Luncheon Kingdom",
                    postgame: true
                },
                {
                    name: "Mechanic: Repairs Complete!",
                    postgame: true
                },
                {
                    name: "Diving from the Big Pot!",
                    postgame: true
                },
                {
                    name: "Hat-and-Seek: Among the Food",
                    postgame: true
                },
                {
                    name: "Luncheon Kingdom: Regular Cup",
                    postgame: true
                },
                {
                    name: "Peach in the Luncheon Kingdom",
                    postgame: true
                },
                {
                    name: "From Inside a Bright Stone",
                    postgame: true
                },
                {
                    name: "Under the Meat Plateau",
                    postgame: true
                },
                {
                    name: "On Top of a Tall, Tall Roof",
                    postgame: true
                },
                {
                    name: "From a Crack in the Hard Ground",
                    postgame: true
                },
                {
                    name: "By the Cannon Pointed at the Big Pot",
                    postgame: true
                },
                {
                    name: "Luncheon Kingdom: Master Cup",
                    postgame: true
                },
                {
                    name: "Stepping Over the Gears",
                    postgame: true
                },
                {
                    name: "Lanterns on the Gear Steps",
                    postgame: true
                },
                {
                    name: "Volcano Cave Cruisin'",
                    postgame: true
                },
                {
                    name: "Volcano Cave and Mysterious Clouds",
                    postgame: true
                },
                {
                    name: "Treasure of the Lava Islands",
                    postgame: true
                },
                {
                    name: "Flying Over the Lava Islands",
                    postgame: true
                }
            ]
        },
        bowser: {
            name: "Bowser's Kingdom",
            requiredMoons: 8,
            storyMoons: [
                {
                    name: "Infiltrate Bowser's Castle!",
                    required: true
                },
                {
                    name: "Smart Bombing",
                    prerequisite: "Infiltrate Bowser's Castle!",
                    required: true
                },
                {
                    name: "Big Broodal Battle",
                    prerequisite: "Smart Bombing",
                    required: true
                },
                {
                    name: "Showdown at Bowser's Castle",
                    multimoon: true,
                    prerequisite: "Big Broodal Battle",
                    required: true
                }
            ],
            moons: [
                {
                    name: "Behind the Big Wall"
                },
                {
                    name: "Treasure Inside the Turret"
                },
                {
                    name: "From the Side Above the Castle Gate"
                },
                {
                    name: "Sunken Treasure in the Moat"
                },
                {
                    name: "Past the Moving Wall",
                    worldPeace: true
                },
                {
                    name: "Above the Poison Swamp",
                    worldPeace: true
                },
                {
                    name: "Knocking Down the Nice Frame",
                    worldPeace: true
                },
                {
                    name: "Caught on the Iron Fence"
                },
                {
                    name: "On the Giant Bowser Statue's Nose"
                },
                {
                    name: "Inside a Block in the Castle"
                },
                {
                    name: "Caught Hopping at Bowser's Castle!",
                    worldPeace: true
                },
                {
                    name: "Exterminate the Ogres!"
                },
                {
                    name: "Bowser's Kingdom Timer Challenge 1",
                    worldPeace: true
                },
                {
                    name: "Taking Notes: Between Spinies"
                },
                {
                    name: "Stack Up Above the Wall"
                },
                {
                    name: "Hidden Corridor Under the Floor"
                },
                {
                    name: "Poking Your Nose in the Plaster Wall"
                },
                {
                    name: "Poking the Turret Wall"
                },
                {
                    name: "Poking Your Nose by the Great Gate"
                },
                {
                    name: "Jizo All in a Row"
                },
                {
                    name: "Underground Jizo"
                },
                {
                    name: "Found Behind Bars!"
                },
                {
                    name: "Fishing(?) in Bowser's Castle",
                    worldPeace: true
                },
                {
                    name: "Good to See You, Captain Toad!"
                },
                {
                    name: "Shopping at Bowser's Castle"
                },
                {
                    name: "Bowser's Castle Treasure Vault",
                    worldPeace: true
                },
                {
                    name: "Scene of Crossing the Poison Swamp"
                },
                {
                    name: "Taking Notes: In the Folding Screen"
                },
                {
                    name: "On Top of the Spinning Tower",
                    worldPeace: true
                },
                {
                    name: "Down and Up the Spinning Tower",
                    worldPeace: true
                },
                {
                    name: "Jizo's Big Adventure",
                    worldPeace: true
                },
                {
                    name: "Jizo and the Hidden Room",
                    worldPeace: true
                },
                {
                    name: "Dashing Above the Clouds"
                },
                {
                    name: "Dashing Through the Clouds"
                },
                {
                    name: "Sphynx Over Bowser's Castle",
                    postgame: true
                },
                {
                    name: "I Met a Pokio!",
                    postgame: true
                },
                {
                    name: "Bowser's Kingdom Regular Cup",
                    postgame: true
                },
                {
                    name: "A Rumble Under the Arena Floor",
                    postgame: true
                },
                {
                    name: "Secret Path to Bowser's Castle!",
                    postgame: true,
                    warp: true
                },
                {
                    name: "Peach in Bowser's Kingdom",
                    postgame: true
                },
                {
                    name: "Found with Bowser's Kingdom Art",
                    postgame: true,
                    hintArt: true
                },
                {
                    name: "Behind the Tall Wall: Poke, Poke!",
                    postgame: true
                },
                {
                    name: "From Crates in the Moat",
                    postgame: true
                },
                {
                    name: "Caught on the Giant Horn",
                    postgame: true
                },
                {
                    name: "Inside a Block at the Gate",
                    postgame: true
                },
                {
                    name: "Small Bird in Bowser's Castle",
                    postgame: true
                },
                {
                    name: "Invader in Bowser's Castle",
                    postgame: true
                },
                {
                    name: "Jumping from Flag to Flag",
                    postgame: true
                },
                {
                    name: "Bowser's Kingdom Timer Challenge 2",
                    postgame: true
                },
                {
                    name: "Taking Notes: On the Wall",
                    postgame: true
                },
                {
                    name: "Taking Notes with a Spinning Throw",
                    postgame: true
                },
                {
                    name: "Third Courtyard Outskirts",
                    postgame: true
                },
                {
                    name: "Stone Wall Circuit",
                    postgame: true
                },
                {
                    name: "Bowser's Kingdom Master Cup",
                    postgame: true
                },
                {
                    name: "Searching Hexagon Tower",
                    postgame: true
                },
                {
                    name: "Center of Hexagon Tower",
                    postgame: true
                },
                {
                    name: "Climb the Wooden Tower",
                    postgame: true
                },
                {
                    name: "Poke the Wooden Tower",
                    postgame: true
                }
            ]
        }
    }
}
