/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import {memo, useState } from "react";
import {NavLink} from "react-router-dom"

export const PokemonCards =memo(({currPokemon})=>{
    const  img=currPokemon.sprites.other.home.front_default;
    const  gif=currPokemon.sprites.other.showdown.front_default;
    const [src, setSrc]= useState(img);

    const cardStyle = {
        boxShadow:`${src===img? "none" : "var(--box-shadow)" }`,
    }
    const commonStyle={
        transform:`${src===img?"none" : "perspective(1rem) translateZ(1rem)"}`,
    }

    const imgStyle={
        transform:`${src===img?"none" : "perspective(2.5rem) translateZ(1rem)"}`,
    }

    return (
        
        <li className="pokemon-card-container flex flex-col" >
        <div className={`pokemon-card`} style={cardStyle}>
            <figure className="pokemon-image flex flex-centered">
                <img
                loading="lazy" src={src} style={imgStyle}
                 alt={currPokemon.name} />
            </figure>

            <h3 className="common-heading-2"
                style={commonStyle}
            >{currPokemon.name}</h3>
            <p className="pokemon-type highlighted-para"
               style={commonStyle}>
                {currPokemon.types.map((currTyp)=>currTyp.type.name).join(", ")}
            </p>
        </div>
        <NavLink to={`/${currPokemon.name}`} className={"btn"} onMouseEnter={()=>setSrc(gif)} onMouseLeave={()=>setSrc(img)}
        >Catch Me</NavLink>
        </li>
    );
})