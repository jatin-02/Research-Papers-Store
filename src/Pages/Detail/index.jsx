import React, { useContext, useEffect, useState } from "react";

// importing styles
import "./style.css";

// importing icons
import { IoMdArrowRoundBack as BackArrowIcon } from "react-icons/io";

// importing react-router-dom
import { useParams, useHistory } from "react-router-dom";

// importing firebase
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestore } from "../../Firebase/config";
import { AuthContext } from "../../Context/Firebase";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailPage = () => {
  const [paper, setPaper] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  // console.log(id);
  const docRef = doc(firestore, "papers", `${id}`);
  const savedRef = doc(firestore, "users", `${uid}`);
  const savePaper = async () => {
    await updateDoc(savedRef, {
      saved: arrayUnion(`${id}`),
    });
  };
  useEffect(() => {
    const getData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setPaper(docSnap.data());
      else history.push("/NotFound"); // doc.data() will be undefined in this case
    };
    getData();
  }, [docRef, history]);
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
              <LazyLoadImage
                effect="blur"
                src={paper?.image}
                alt={paper?.title}
              />
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="content">
              <h2 className="title">{paper?.domain}</h2>

              <h2 className="date">{paper?.author?.join(", ")}</h2>

              <h2>Year of publication - {paper?.year}</h2>

              <p className="desc">{paper?.description}</p>

              <div className="details-btn">
                <a
                  href={paper?.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="download-btn"
                >
                  Download
                </a>
                {user && (
                  <button onClick={savePaper} className="download-btn">
                    Save To Library
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
