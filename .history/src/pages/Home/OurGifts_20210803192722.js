import React from "react";
import "./OurGifts.css";

const OurGifts = () => {
  return (
    
     <section className="gift">
       <div className="content-box">
         <div className="container">
           <h1 className="gift-header">Our Services</h1>
           <div className="row gift">
           <div className="col-mid-3 text-center">
             <div className="gift-icon">
               <i className=" fa fa-paint-brush"></i>
             </div>
             <h3 className="gift-header-three">Gift <span className="gift-header-three-span"> Boxes</span></h3>
           </div>
           </div>
         </div>
       </div>
     </section>
    
  );
};
export default OurGifts;
