import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />;
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>The Creative Artist</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              laborum ullam et, nobis deleniti omnis aut magnam nesciunt
              laboriosam animi harum exercitationem, quas eius ducimus, quidem
              architecto autem obcaecati voluptatum!
            </p>
          </div>

          <div className="footer-col">
            <h4>Gifts</h4>
            <ul>
              <li>
                <NavLink to="/gifts" exact>
                  <i class="fas fa-gifts" />
                  Gift Boxes
                </NavLink>
              </li>
              <li>
              <NavLink to="/gifts" exact>
                  <i class="fas fa-cubes" />
                  Pop-Up Cube Boxes
                </NavLink>
              </li>
              <li>
              <NavLink to="/gifts" exact>
                  <i class="fas fa-swatchbook" />
                  Gift Cards
                </NavLink>
              </li>
              <li>
              <NavLink to="/gifts" exact>
                  <i class="fas fa-book" />
                  Scrapbook
                </NavLink>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i class="fas fa-cube" />
                  Magic Cube
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Art</h4>
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-artstation" />
                  Powder Shading
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-pencil-alt" />
                  Pencile Shading
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-pen-alt" />
                  Mandala Art
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i class="fab fa-instagram" />
              </a>
              <a href="#">
                <i class="fab fa-youtube" />
              </a>
              <a href="#">
                <i class="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p className="copyright">
          {" "}
          Copyright &copy;TheCreativeArtist. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
