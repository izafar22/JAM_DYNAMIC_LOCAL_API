const vibes = [
    ".... and you r awesome",
    "... have a wonderful day",
    "..and You hve got this",
    "... and so is this puppy"
]

var vibe = vibes[Math.floor(Math.random() * vibes.length)];

document.querySelector('.vibe').append(vibe);