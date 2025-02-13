/* eslint-disable react/display-name */
import {NavLink} from "react-router-dom"
import { FaBars,  FaXmark } from "react-icons/fa6";
import { memo, useReducer } from "react";
export const Header =memo(()=>{
    console.log("hsijc")
    const initialState={
        headerClass:"",
        menuClass:"flex",
        closeClass:"hidden",
    }

    const reducer =(state, action)=> {
        switch (action.type) {
            case "menu":
                return{
                    ...state,
                    headerClass:"animated-header",
                    menuClass:"hidden",
                    closeClass:"flex"
                }
            case "close":
                return{
                    ...state,
                    headerClass:"",
                    menuClass:"flex",
                    closeClass:"hidden",
                }
        
            default:
                state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleClick =()=>{
        if(state.headerClass=="animated-header"){
            dispatch({type:"close"})
        }
    }

    return(
        <>
        <header className={`header ${state.headerClass}`}>
        <img loading="lazy" className="logo" src="http://localhost:5173/images/pokemon-logo.png" alt="logo" />
        <nav className="nav-bar">
            <ul className="navbar-list flex">
                <li>
                    <NavLink to="/" className="navbar-link Cards-link" onClick={handleClick}>
                        Pokemon Cards
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navbar-link about-link"  onClick={handleClick}>
                       About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"  className="navbar-link contact-link"  onClick={handleClick}>
                        Contact Me
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div className="flex nav-btns-container flex-centered">
            <button className={`menu-btn nav-btns flex-centered ${state.menuClass}`}
                onClick={()=>dispatch({type:"menu"})}
            >
                <FaBars  />
            </button>
            <button className={`close-btn nav-btns flex-centered ${state.closeClass}`}
                onClick={(()=>dispatch({type:"close"}))}
            >
                 <FaXmark/>
            </button>    
        </div>
    </header>
        </>
    )
})