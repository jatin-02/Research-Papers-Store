import React, { useEffect, useState, useContext } from "react";

// importing components
import Card from "../../Components/Card";

// importing styles
import "./style.css";

// importing react-router-dom
import { Link } from "react-router-dom";

// importing firebase
import { collection, getDocs, getDoc, doc, setDoc} from "firebase/firestore"
import { firestore } from "../../Firebase/config"
import { AuthContext } from "../../Context/Firebase"
import { getFirestore } from "firebase/firestore"
import { useGlobalContext } from "../../Context/Firebase"
import { getPaperByCategory } from "../../services/firebase"

const Home = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true)
  const [papers, setPapers] = useState(null)
  let domain = 'physics'

  useEffect(async () => {
    const data = await getPaperByCategory(domain)
    if(data){
      setPapers(data)
      setLoading(false)
    }
    return ()=>{
      data = null
    }
  }, [])

  if(loading){
    return 'loading...'
  }
  return (
      <div className="home-page">
      <div className="row">
        <div className="col-12 carousel">
          <img
            src="https://www.wallpapertip.com/wmimgs/12-125679_cool-background.jpg"
            alt="iron man"
          />
        </div>
      </div>
      <div className="card-section row">
        {papers?.map((paper) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={paper.id}>
              <Link to={`/category/${domain}/detail/${paper.id}`}>
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
    )
};

export default Home;
