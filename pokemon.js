const urlList = JSON.parse(sessionStorage.getItem('urlList'));
const sprite = sessionStorage.getItem('sprite');

const pokemon = {
    nombre: document.getElementById('pokemon-name'),
}
//console.log(urlList);

const GetPokemon = ()=>{
    const spriteName = sprite.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/', '');
    const spriteNumber = spriteName.replace('.png', '');
    //console.log(spriteNumber);
    urlList.forEach(element => {
        let pokemonNumber = element.replace('https://pokeapi.co/api/v2/pokemon/', '');
        pokemonNumber = pokemonNumber.replace('/', '');
        if(spriteNumber == pokemonNumber)
        {
            const Pokedatos = async url=>{
                fetch(url).then(data => data.json()).then(json =>{
                    const nombre = json.name;
                    console.log(nombre);
                    pokemon.nombre.innerHTML = `Name: ${nombre}`;
            
                });
            }
            Pokedatos(element);
        }
    });
}

GetPokemon();