import React, { useEffect, useState } from "react";

// importing params and link
import { useParams, Link } from "react-router-dom";

// importing components
import Card from "../../Components/Card/";

// firestore
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/config";

const SingleCategory = () => {
  const [papers, setPapers] = useState([]);
  const { domain } = useParams();
  const q = query(
    collection(firestore, "papers"),
    where("domain", "==", domain)
  );
  const getData = async () => {
    const querySnapshot = await getDocs(q);
    const paperData = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setPapers(paperData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="category-page">
      <div className="row">
        <div className="col-12 header">
          <h1>{domain} Page</h1>
        </div>
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

export default SingleCategory;
