import React from "react";

// importing styles
import "./style.css";
import { Link } from "react-router-dom";

// importing icons
import { IoMdArrowRoundBack as BackArrowIcon } from "react-icons/io";

const DetailPage = () => {
  return (
    <div className="detail-page">
      <button className="back-btn">
        <BackArrowIcon />
      </button>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">Sub-Domain</h1>
          </div>

          <div className="col-12 col-md-5">
            <div className="poster">
              <img
                src="https://ars.els-cdn.com/content/image/X01968858.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="content">
              <h2 className="title">This is title of research paper</h2>

              <h2 className="date">Domain</h2>

              <h2>Year of publication - 2018</h2>

              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                labore porro et accusamus minus esse exercitationem voluptate
                quia facere amet ut odit, perferendis earum aut inventore enim
                natus quae sequi laboriosam rem officia delectus! Minima libero
                excepturi, veniam voluptas corporis tempore nesciunt facere odio
              </p>

              <div className="details-btn">
                <Link to="" className="download-btn">
                  Download
                </Link>
                <Link to="" className="download-btn">
                  Save To Library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
