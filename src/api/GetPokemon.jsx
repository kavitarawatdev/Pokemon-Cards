export const getPokemonDetails =async({params})=>{
    const pokemon = params.pokemon;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error.status)
    }
}