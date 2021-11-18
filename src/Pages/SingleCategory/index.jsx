import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Card from "../../Components/Card/"
import {getPaperByCategory} from '../../services/firebase'

const SingleCategory = () => {
  
  const { domain } = useParams()
  const [papers, setPapers] = useState(null)
  const [pageTitle, setPageTitle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(async ()=>{
    
    const data = await getPaperByCategory(domain)
    if(data){
      setLoading(false)
      setPageTitle(data[0].domain)
      setPapers(data)
    }
    return ()=>{
      data = null
    }
  }, [domain])

  if(loading){
    return 'loading...'
  }

  return (
      <div className="category-page">
      <div className="row">
        <div className="col-12 header">
          <h1>{pageTitle}</h1>
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


