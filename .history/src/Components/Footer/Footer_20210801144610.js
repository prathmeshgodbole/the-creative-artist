import React from "react";
import "./Footer.css";
import TheCreativeArtist from '../../assets/The CreativeArtist.png'

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="footer-col">
            <h4>The Creative Artist</h4>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo laborum ullam et, nobis deleniti omnis aut magnam nesciunt laboriosam animi harum exercitationem, quas eius ducimus, quidem architecto autem obcaecati voluptatum!</p>
          </div>

          <div className="footer-col">
            <h4>Gifts</h4>
            <ul>
              <li>
                <a href="#">Gift Boxes</a>
              </li>
              <li>
                <a href="#">Pop-Up Cube Boxes</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Scrapbook</a>
              </li>
              <li>
                <a href="#">Magic Cube</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Art</h4>
            <ul>
              <li>
                <a href="#">Powder Shading</a>
              </li>
              <li>
                <a href="#">Pencile Shading</a>
              </li>
              <li>
                <a href="#">Mandala Art</a>
              </li>
            </ul>
          </div>
                
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div class="social-links">
                <a href="#"> <i class="fab fa-facebook-f"/></a>
                <a href="#"> <i class="fab fa-instagram"/></a>
                <a href="#"> <i class="fab fa-youtube"/></a>
                <a href="#"> <i class="fab fa-twitter"/></a>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
          <div className="row">
              <p class>Copyright ©The Creative Artist. All rights reserved. </p>
          </div>
      </div>
    </footer>
  );
};
export default Footer;
