import React, { useContext, useEffect, useState } from "react";

// importing styles
import "./style.css";

// importing icons
import { IoMdArrowRoundBack as BackArrowIcon } from "react-icons/io";

// importing react-router-dom
import { useParams, useHistory, Link } from "react-router-dom";

// importing firebase
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestore } from "../../Firebase/config";
import { AuthContext } from "../../Context/Firebase";

import { getPaperByCategory } from "../../services/firebase";
const DetailPage = () => {

  const { domain, id } = useParams();
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  const [paper, setPaper] = useState(null)
   
  const savedRef = doc(firestore, "users", `${uid}`);
  const savePaper = async () => {
    await updateDoc(savedRef, {
      saved: arrayUnion(`${id}`),
    })
  };


  useEffect(async ()=>{
    let data
    const res = await getPaperByCategory(domain)
    data = res.filter((paper)=> paper.id === id)
    if(data){
      console.log(data)
      setPaper(data[0])
    }else{
      console.log('paper do not exist')
    }
    return ()=>{
      data = null
    }
  }, [id])


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
                <a
                  href={paper?.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="download-btn"
                >
                  Download
                </a>
                <button onClick={savePaper} className="download-btn">
                  Save To Library
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
