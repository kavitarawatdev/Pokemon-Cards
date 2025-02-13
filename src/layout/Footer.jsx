/* eslint-disable react/display-name */
import { NavLink } from "react-router-dom";
import { FaSquareInstagram , FaSquareGithub, FaLinkedin} from "react-icons/fa6";
import { memo } from "react";
export const Footer = memo(() => {
  return (
    <>
      <footer className="footer section footer-section flex flex-col">
        <div className="container grid grid-three-col">
          <div className="f-about">
            <h3>about</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              cumque dolorem praesentium hic? Vero adipisci ipsa repudiandae
              incidunt porro deleniti assumenda maiores mollitia numquam. Fugit
              praesentium quas dignissimos temporibus cumque?
            </p>
          </div>
          <div className="f-links">
            <h3>links</h3>
            <ul className="flex flex-col">
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/cards">Pokemon Cards</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-address">
                <h3>Have a Question?</h3>
                <ul className="flex flex-col">
                  <li>
                    <span>📍</span>
                    <NavLink to="">kashipur, India</NavLink>
                  </li>
                  <li>
                    <span>📧</span>
                    <NavLink to="mailto:ikavitarwat227@gmail.com">ikavitarwat227@gmail.com</NavLink>
                  </li>
                  <li>
                    <span>📞</span>
                    <NavLink to="tel:+91 9211420420">+91 9211420420</NavLink>
                  </li>
                </ul>
          </div>
        </div>
        <div className="container flex flex-col flex-centered">
          <div className="f-social-media-icons flex">
            <NavLink to="https://www.instagram.com/ikavitarawatt/" target="-blank">
              <FaSquareInstagram/>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/kavitarawat11/" target="-blank">
              <FaLinkedin/>
            </NavLink>
            <NavLink to="" target="-blank">
              <FaSquareGithub/>
            </NavLink>
          </div>
          <div className="f-credits">
            <p>
              Copyright ©️2024 All rights reserved | This template is made with
              ❤️ by Kavita Rawat
            </p>
          </div>
        </div>
      </footer>
    </>
  );
});
