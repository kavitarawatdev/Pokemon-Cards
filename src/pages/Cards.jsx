/* eslint-disable react/prop-types */
import { useState } from "react";
import {PokemonCards} from "../UI/PokemonCards"
import { useLoaderData } from "react-router-dom"
import { Empty } from "../UI/Empty";

export const Cards =()=>{
    const pokemonsLists =  useLoaderData();
    const [userInput, setInput] = useState("");
    const searchPokemon = pokemonsLists.filter((currPokemon)=> currPokemon.name.toLowerCase().includes(userInput.toLowerCase()))  

    return(
        <>
        <section className="section flex flex-col flex-centered cards-section">
            <div className="container">
                <h2 className="common-heading">Lets Catch Pokemons</h2>
            </div> 
            <form className="form container flex flex-centered" onSubmit={(e)=>e.preventDefault()}>
                <input type="text"  placeholder="Enter pokemon name" 
                    onChange={(e)=>setInput(e.target.value)}
                />
            </form>
            {
                searchPokemon.length===0?<Empty/>:
            <ul className="grid container grid-four-col cards-list">           
               {searchPokemon.map((currPokemon)=><PokemonCards key={currPokemon.id} currPokemon={currPokemon} />)}
            </ul>
            }
        </section>
        </>
    )
}



