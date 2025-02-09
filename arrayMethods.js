let superHeroes = 
[
    { name: 'Superman', power: 100, universe: 'DC' },
    { name: 'CaptainAmerica', power: 93, universe: 'Marvel' },
    { name: 'Batman', power: 75, universe: 'DC' },
    { name: 'BlackWidow', power: 78 , universe: 'Marvel' },
    { name: 'DrStrange', power: 91 , universe: 'Marvel' },
    { name: 'Spiderman', power: 90, universe: 'Marvel' },
    { name: 'Ironman', power: 88, universe: 'Marvel' },
    { name: 'WonderWoman', power: 92, universe: 'DC' },
    { name: 'BlackPanther', power: 87 , universe: 'Marvel' },
    { name: 'Flash', power: 80, universe: 'DC' },
    { name: 'Hulk', power: 83, universe: 'Marvel' },
    { name: 'Thor', power: 95, universe: 'Marvel' }
]

superHeroes.forEach(superhero => {
    superhero.team = superhero.universe === 'DC' ? 'Justice League' : 'Avengers';
})

console.log("SuperHeroes with team:")
superHeroes.forEach(superhero => console.log(JSON.stringify(superhero)));

let rankedSuperheroes = superHeroes.map(superhero => ({
    ...superhero,
    rank: superhero.power > 90 ? 'Top Tier' : 'Second Tier'
}))

console.log("Superheroes with rank:")
rankedSuperheroes.forEach(superhero => console.log(JSON.stringify(superhero)));

let marvelHeroes = rankedSuperheroes.filter(superhero => superhero.universe === 'Marvel');

console.log("Marvel Superheroes:")
marvelHeroes.forEach(superhero => console.log(JSON.stringify(superhero)));

let sortedHeroes = [...rankedSuperheroes].sort((a, b) => b.power - a.power);

console.log("Sorted Superheroes:")
sortedHeroes.forEach(superhero => console.log(JSON.stringify(superhero)));