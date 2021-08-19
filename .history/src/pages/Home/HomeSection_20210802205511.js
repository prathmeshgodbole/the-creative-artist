import React from "react";

const HomeSection = () => {
  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4>
              Why <span>The Creative Artist ?</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, numquam. Voluptatibus, tempora illo, distinctio unde
              hic vero quod porro est facere magnam velit esse. Delectus quia
              doloremque amet suscipit laudantium?
            </p>
          </div>
          {/*  */}
          <div className="col-lg-4 col-sm-6">
            <div className="item">
              <span className="icon feature_box_col_one">
                <i className="fa fa-globe"></i>
              </span>
              <h6>Modern Design</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas porro laudantium vitae possimus recusandae! Nesciunt
                unde tempora, eos, voluptatibus quo, quos reiciendis
                exercitationem pariatur enim ipsa nostrum cupiditate iusto non?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
