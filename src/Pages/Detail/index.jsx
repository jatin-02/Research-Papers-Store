import React from "react";

// importing styles
import "./style.css";

const DetailPage = () => {
  return (
    <div className="detail-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">Linked List</h1>
          </div>
          <div className="col-12 col-md-4">
            <div className="poster">
              <img
                src="https://ars.els-cdn.com/content/image/X01968858.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="content">
              <h2 className="title">
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </h2>
              <h2 className="date">Lorem ipsum dolor sit amet.</h2>
              <h2>Lorem, ipsum.</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                labore porro et accusamus minus esse exercitationem voluptate
                quia facere amet ut odit, perferendis earum aut inventore enim
                natus quae sequi laboriosam rem officia delectus! Minima libero
                excepturi, veniam voluptas corporis tempore nesciunt facere odio
              </p>
              <div className="details-btn">
                <a href="" className="download-btn">
                  Download
                </a>
                <a href="" className="download-btn">
                  Save To Library
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
