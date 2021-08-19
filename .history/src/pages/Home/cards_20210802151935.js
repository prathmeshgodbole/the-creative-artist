import React from 'react';
import { NavLink } from 'react-router-dom';
import './cards.css';
import giftcard from '../../assets/giftcard.png';
import giftbox from '../../assets/giftbox.png';
import powdershading from '../../assets/powdershading.png';
import sketching from '../../assets/sketching.png';


const Cards=()=> {
    return(
<div className="area">
    <div className="container">
        <div className="row">

            <div className="col-md-4 ">
                <div className="card">
                <NavLink to='/gifts' exact><div className="img2"><img src={giftbox} alt='giftbox'/></div></NavLink>
                    <div className="main-text">
                        <h2>Gift Boxes</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                <NavLink to='/gifts' exact> <div className="img2"><img src={giftcard} alt='giftcard'/></div></NavLink>
                    <div className="main-text">
                        <h2>Pop-Up Cube Boxes</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"><img src={giftcard} alt='giftcard'></img></div>
                    <div className="main-text">
                        <h2>Gift Cards</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                        <NavLink to='/gifts' exact><i class="btn btn-primary">Explore</i></NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"><img src={giftcard} alt='giftcard'></img></div>
                    <div className="main-text">
                        <h2>Scrapbook</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                        <NavLink to='/gifts' exact><i class="btn btn-primary">Explore</i></NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"><img src={giftcard} alt='giftcard'></img></div>
                    <div className="main-text">
                        <h2>Magic Cube</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                        <NavLink to='/gifts' exact><i class="btn btn-primary">Explore</i></NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"><img src={giftbox} alt='giftbox'></img></div>
                    <div className="main-text">
                        <h2>Photo Gallery</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                        <NavLink to='/gifts' exact><i class="btn btn-primary">Explore</i></NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"><img src={powdershading} alt='powdershading'></img></div>
                    <div className="main-text">
                        <h2>Powder Shading</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                        <NavLink to='/sketches' exact><i class="btn btn-primary">Explore</i></NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"><img src={sketching} alt='pencilshading'/></div>
                    <div className="main-text">
                        <h2>Pencile Shading</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                        <NavLink to='/sketches' exact><i class="btn btn-primary">Explore</i></NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"><img src={sketching} alt='pencilshading'/></div>
                    <div className="main-text">
                        <h2>Mandala Art</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                        <NavLink to='/sketches' exact><i class="btn btn-primary">Explore</i></NavLink>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>
    )
}
export default Cards;