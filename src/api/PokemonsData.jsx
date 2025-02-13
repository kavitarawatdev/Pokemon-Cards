export const getPokemonsData = async () => {
  try {
    // fetchin api
    const apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const apiData = await apiResponse.json();
    const data = apiData.results.map(async (currData) => {
      // fetching individual pokemon data
      const response = await fetch(currData.url);
      //  individual pokemon data (as promises)
      const pokemonData = await response.json();
      return pokemonData;
    }); 
    // getting single promise from list of promises
    const detailedData = await Promise.all(data);
    return  detailedData;

  } catch (error) {
    console.log(error);
  }
};