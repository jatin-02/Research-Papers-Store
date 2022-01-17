import React, { useState, useContext, useEffect } from "react";
import LibraryCard from "./LibraryCard";

import { useHistory } from "react-router-dom";
import "./style.css";

// importing firebase
import { firestore } from "../../Firebase/config";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";

// importing firebase context
import { AuthContext } from "../../Context/Firebase";

const Library = () => {
  const [papers, setPapers] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const id = user?.uid;
  const history = useHistory();
  if (user == null) history.push("/login");
  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, "users", `${id}`), (doc) => {
      if (doc.data()?.saved) setSaved(() => [...doc.data()?.saved]);
      else setSaved(null);
    });
    return () => unsub();
  }, [id]);
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
          setPapers(res);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    if (saved?.length === 0) {
      setLoading(false);
    }
  }, [saved]);

  return (
    <div className="library-page">
      {loading && <div className="loading">Loading...</div>}
      {!loading && saved.length === 0 && (
        <div className="loading">Empty library</div>
      )}

      {!loading && saved.length !== 0 && (
        <>
          <div className="header">
            <h1>Your Library</h1>
          </div>
          <div className="card-section row">
            {papers?.map((paper, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <LibraryCard
                    title={paper.title}
                    topic={paper.topic}
                    author={paper.author}
                    id={saved[index]}
                    year={paper.year}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Library;
