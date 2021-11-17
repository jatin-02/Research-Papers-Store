import React, { useEffect, useState } from "react";

// importing params and link
import { useParams, Link } from "react-router-dom";
// importing components
import Card from "../../Components/Card/";
import { useGlobalContext } from "../../Context/Firebase"



const SingleCategory = () => {
  
  const { domain } = useParams();
  const {paperData, setEachPaperData} = useGlobalContext()
  let papers
  for(let sub in paperData){
    if(sub == domain){
      papers = paperData[sub]
    }else{
      console.log("doesn't exist")
    }
  }
 setEachPaperData(()=>papers)


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


