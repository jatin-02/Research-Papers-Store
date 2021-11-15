import React, { useState, useContext, useEffect } from "react";
import Card from "../../Components/Card";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

// importing firebase
import { auth, firestore } from "../../Firebase/config";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";

// importing firebase context
import { AuthContext } from "../../Context/Firebase";

const Library = () => {
  const [papers, setPapers] = useState([]);
  const [saved, setSaved] = useState([]);
  const { user } = useContext(AuthContext);
  const id = user?.uid;
  const history = useHistory();
  if (user == null) history.push("/login");
  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, "users", `${id}`), (doc) => {
      setSaved(()=> [...doc.data().saved]);
    });
    return () => unsub();
  }, []);
  useEffect(() => {
    // fireship is great
    const readIds = async (ids) => {
      const reads = ids.map((id) => getDoc(doc(firestore, "papers", `${id}`)));
      const result = await Promise.all(reads);
      return result.map((v) => v.data());
    };
    if (saved?.length !== 0)
      readIds(saved)
        .then((res) => {
          setPapers(res)
        })
        .catch((err) => console.log(err));
  }, [saved]);


  return (
    <div className="library-page">
      <div className="header">
        <h1>Your Library</h1>
      </div>
      <div className="card-section row">
        {papers?.map((paper, index) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              
              <Link to={`/detail/${saved[index]}`}>
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

export default Library;
