/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
/* eslint-disable for-direction */
/* eslint-disable react/prop-types */
import { useLoaderData, useNavigate } from "react-router-dom"

export const Pokemon= ()=>{
    const navigate=useNavigate()
    const pokemon = useLoaderData();
    return(
        
        <>
        <section className="pokemon-section flex flex-col flex-centered section">
        {console.log("pokemon")}
            <h2 className="common-heading">{pokemon.name}</h2>
            <div className="pokemon-data grid  container grid-two-col">
                <figure>
                    <img loading="lazy" src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                </figure>
                <div className="pokemon-details-container flex flex-col">
                    <PokemonInfo title={"height"} value={pokemon.height}/>
                    <PokemonInfo title={"weight"} value={pokemon.weight}/>
                    <PokemonInfo title={"type"} value={pokemon.types.map((currTyp)=>currTyp.type.name).join(", ")}/>
                    {pokemon.stats.map((currStat)=><PokemonInfo title={currStat.stat.name} value={currStat.base_stat}/>)}
                    <PokemonInfo title={"moves"} value={pokemon.moves.map((currMove)=>currMove.move.name).slice(15,20).join(", ")}/>
                </div>
            </div>
            <button onClick={()=>navigate(-1)} className="btn">Back to Previous page</button>
        </section>
        </>
    )
}

const PokemonInfo = ({title, value})=>{
    return(
        <div className="pokemon-info flex">
            <p>{title}  :  {value} </p>
            {console.log("pokemon inf0")}
        </div>
    )
}
