import React, { useEffect, useState } from "react";

// importing styles
import "./style.css";

// importing icons
import { IoMdArrowRoundBack as BackArrowIcon } from "react-icons/io";

// importing react-router-dom
import { useParams, useHistory, Link } from "react-router-dom";

// importing firebase
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../Firebase/config";

const DetailPage = () => {
  const [paper, setPaper] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  // console.log(id);
  const docRef = doc(firestore, "papers", `${id}`);
  useEffect(() => {
    const getData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPaper(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        history.push("/NotFound");
      }
    };
    getData();
  }, [docRef]);
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => history.goBack()}>
        <BackArrowIcon />
      </button>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="page-title">{paper?.title}</h1>
          </div>

          <div className="col-12 col-md-5">
            <div className="poster">
              <img src={paper?.image} alt={paper?.title} />
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="content">
              <h2 className="title">{paper?.domain}</h2>

              <h2 className="date">{paper?.author}</h2>

              <h2>Year of publication - {paper?.year}</h2>

              <p className="desc">{paper?.description}</p>

              <div className="details-btn">
                <a herf={paper?.pdf} className="download-btn">
                  Download
                </a>
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
