import React from 'react';
import './cards.css';

const Cards=()=> {
    return(
<div className="area">
    <div className="container">
        <div className="row">

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"></div>
                    <div className="main-text">
                        <h2>Gift Boxes</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                   <a href="#" class="btn"></a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"></div>
                    <div className="main-text">
                        <h2>Scrapbooks</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 ">
                <div className="card">
                    <div className="img2"></div>
                    <div className="main-text">
                        <h2>Gift Cards</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur nostrum quidem laudantium rem maiores ipsa explicabo eos praesentium eum eaque placeat, quas sint quod voluptates, dignissimos, non ab!</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
    )
}
export default Cards;