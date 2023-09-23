// async function getPokemonData(url){
//     const res = await fetch(url).then(res => res.json())
//     return res
// }
// // Get the pokemon data for the kanto region 
// getPokemonData('https://pokeapi.co/api/v2/pokedex/2/')
//     .then(data => {

//         const allPokemon = data.pokemon_entries
        
//         // Get the details about the individual pokemon
//         for(let pokemon of allPokemon){
//             // changes the endpoint for teach pokemon
//             const newUrl = pokemon.pokemon_species.url.replace('-species', '')

//             getPokemonData(newUrl)
//             .then(pokemonData => {
//                 // create a figure element for each slide
//                 const figure = document.createElement('figure')
//                 figure.innerHTML = 
//                 `
//                 <img src=${pokemonData.sprites.other['official-artwork'].front_default} >

//                 <figcaption>
//                     <h3>${pokemonData.name}</h3>
//                     <p>Type: ${pokemonData.types[0].type.name}</p>
//                     <p>Type: ${pokemonData.height}</p>
//                     <p>Weight: ${pokemonData.weight}</p>
//                 <figcaption>
//                 `
//                 document.getElementById('carousel').append(figure)

//                 images.push(figure)
//             })
//         }
//     })

//     // this array keeps track of the current carousel slide

//     const images = []

//     // this will store the index of the current image 
//     let currentImgIndex = 0

//     // keeps the index of the previous image 
//     let previousImgIndex = 0


//     const next = document.querySelector('.next')

//     next.addEventListener('click', () => {
//         // the image displayed will become the previous image when we press the button
//         previousImgIndex = currentImgIndex
//         // the next image in the carousel will now become the current image
//         currentImgIndex++
//         // loops back to the beginning when on the last image
//         if(currentImgIndex >= 151){
//             currentImgIndex = 0
//         }
//         //hide the current image
//         images[previousImgIndex].style.display = 'none'
//         // Display the next image
//         images[currentImgIndex].style.display = 'block'
//     })

//     const prev = document.querySelector('.prev')

//     prev.addEventListener('click', () => {
//         // The image being displayed currently will now become the previous image
//         previousImgIndex = currentImgIndex
//         // The previous image in the carousel will now become the current image
//         currentImgIndex--
//         // Loop back to the beginning when on the last image
//         if (currentImgIndex < 0) {
//             currentImgIndex = 150;
//         }
    
//         // Hide the current image (which is now the previous image)
//         images[previousImgIndex].style.display = 'none'
//         // Display the next image (which is now the current image)
//         images[currentImgIndex].style.display = 'block'
//     })



async function getPokemonData(url) {
    const response = await fetch(url).then(res => res.json())
    return response
}

getPokemonData('https://pokeapi.co/api/v2/pokedex/2/')
    .then(data => {
        const allPokemon = data.pokemon_entries

        for(let pokemon of allPokemon){
            const newUrl = pokemon.pokemon_species.url.replace('-species', '')

            getPokemonData(newUrl)
                .then(pokemonData => {
                    const figure = document.createElement('figure')

                    figure.innerHTML = 
                    `
                    <img src=${pokemonData.sprites.other['official-artwork'].front_default}>

                    <figcaption>
                        <h3>${pokemonData.name}</h3>
                        <p>Type: ${pokemonData.types[0].type.name}</p>
                        <p>Height: ${pokemonData.height}</p>
                        <p>Weight: ${pokemonData.weight}</p>
                    <figcaption>
                    `
                    document.getElementById('carousel').append(figure)
                    // this is for the carousel
                    images.push(figure)
            })
        }
    })

    const images = []
    let currentImgIndex = 0
    let previousImgIndex = 0
    const nextButton = document.querySelector('.next')
    const previousButton = document.querySelector('.prev')
    nextButton.addEventListener('click', ()=>{
        previousImgIndex = currentImgIndex
        currentImgIndex++
        if(currentImgIndex >= 151){
            currentImgIndex = 0
        }
        images[previousImgIndex].style.display = 'none'

        images[currentImgIndex].style.display = 'block'
    })
    
    previousButton.addEventListener('click',()=>{
        previousImgIndex = currentImgIndex
        currentImgIndex--
        if(currentImgIndex < 0){
            currentImgIndex = 150
        }
        images[previousImgIndex].style.display = 'none'

        images[currentImgIndex].style.display = 'block'
    })

    