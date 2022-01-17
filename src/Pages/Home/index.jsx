import React, { useEffect, useState } from "react";

// importing components
import Card from "../../Components/Card";

// importing styles
import "./style.css";

// importing react-router-dom
import { Link } from "react-router-dom";

// importing firebase
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/config";

const Home = () => {
  const [papers, setPapers] = useState([]);
  const docRef = collection(firestore, "papers");

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(docRef);
      const paperData = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      paperData.length = 6;
      setPapers(paperData);
    };
    getData();
  }, [docRef]);

  return (
    <div className="home-page">
      <div className="row">
        <div className="col-12 carousel">
          <img
            src="https://www.wallpapertip.com/wmimgs/12-125679_cool-background.jpg"
            alt="nothing"
          />
        </div>
      </div>
      <div className="card-section row">
        {papers?.map((paper) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={paper.id}>
              <Link to={`/detail/${paper.id}`}>
                <Card
                  title={paper.title}
                  topic={paper.topic}
                  author={paper.author}
                  year={paper.year}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
