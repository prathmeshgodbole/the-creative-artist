import React from 'react'
import './OurTeam.css';

const OurTeam=()=> {
    return (
        <div class="ourteam-container">
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src="./team1.jpg" alt=""/>
                </div>
                <div class="contentBx">
                    <h4>Prathmesh Godbole</h4>
                    <h5>Artist</h5>
                </div>
                <div class="sci">
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src="./team2.jpg" alt=""/>
                </div>
                <div class="contentBx">
                    <h4>Ann Brown</h4>
                    <h5>Mannager</h5>
                </div>
                <div class="sci">
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src="./team3.jpg" alt=""/>
                </div>
                <div class="contentBx">
                    <h4>Ben Jason</h4>
                    <h5>Developer</h5>
                </div>
                <div class="sci">
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>

    </div>
    );
}

export default OurTeam;