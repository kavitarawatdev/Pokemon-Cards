/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { memo, useCallback, useReducer } from "react";
import { NavLink } from "react-router-dom";

export const About = memo( () => {

  // init val of state
  const initialState = {
    btnClass:"",
    spanClass:"hidden"
  }
  const reducer = (state, action)=>{
    switch (action.type) {
      case "more":
        return{
          ...state,
          btnClass:"hidden",
          spanClass:"",
        }
      case "less":
        return{
          ...state,
          spanClass:"hidden",
          btnClass:"",
        }
    
      default:
        state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section className="about-section section flex flex-col">
      <div className="about-project-container container flex flex-col">
        <h1 className="common-heading">About This Project</h1>
        <div className="grid-two-col grid">
          
          <div className="about-project-left-side flex flex-centered">
            <figure className="flex flex-centered">
              <img src="http://localhost:5173/images/project.jpg" alt="" />
            </figure>
          </div>

          <div className="about-project-right-side flex flex-centered ">
            <article className="flex flex-col">
              <p>
               Hi, I'm Kavita, a 23-year-old aspiring web developer. I'm passionate
                about learning new technologies and creating engaging web experiences.
                This Pokémon card website is a passion project built using{" "}
                <strong>React.js</strong>. As a child, I loved watching the
                Pokémon cartoon, and this project is a small tribute to those
                fond memories. Using the official Pokémon API, I've created a
                dynamic display of<span className={state.btnClass}>...{"  "}</span>
                 <button className={`btn ${state.btnClass}`} 
                 onClick={useCallback(()=>dispatch({type:"more"}))}>
                  Read more
                </button>
                  <span className={state.spanClass}> 
                    {/* hide para  */}
                    Pokémon cards, each with a unique hover
                effect that transforms the static image into an animated GIF.
                This was achieved using React's <code>useState</code> hook,
                adding a
                touch of magic to the browsing experience. I also
                implemented a subtle 3D effect using{" "}
                <code>transform: translateZ</code>, giving the cards a bit more
                depth.<br/><br/>
                The site utilizes{" "} <strong>React Router</strong> for smooth
                and dynamic page navigation, making it easy to explore different
                Pokémon. Responsiveness was a key focus, ensuring the website
                looks great on all devices. Navigation buttons allow for easy
                movement between pages, enhancing the user experience.
                <br/><br/>
                This project was created while learning React.js from{" "}
                <strong>Thapa Technical on YouTube</strong>. It's been an
                incredible learning journey, and I'm excited to continue
                building and improving upon this project in the future. It's been a rewarding experience, and I'm
                proud of what I've accomplished. I'm open to feedback and always
                looking for ways to improve. Feel free to reach out through the{" "}
                <NavLink to="/contact">"Contact Me"</NavLink> page – I'd love to
                hear from you!❣️{"  "}
                <button className={`btn`} 
                    onClick={useCallback(()=>dispatch({type:"less"}))}>
                  Read less
                </button>
                </span>
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
});
