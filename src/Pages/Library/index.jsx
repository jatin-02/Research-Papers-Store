import React, { useState, useContext, useEffect } from "react";
import Card from "../../Components/Card";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

// importing firebase
import { firestore } from "../../Firebase/config";
import { doc, getDoc, onSnapshot } from "@firebase/firestore";

// importing firebase context
import { AuthContext } from "../../Context/Firebase";
import { getPaperByCategory } from "../../services/firebase";

const Library = () => {
  const [papers, setPapers] = useState(null)
  const [saved, setSaved] = useState([])
  const [ loading, setLoading] = useState(true)
  const { user } = useContext(AuthContext)
  const id = user?.uid
  const history = useHistory()
  if (user == null) history.push("/login")
  useEffect(() => {
    const unsub = onSnapshot(doc(firestore, "users", `${id}`), (doc) => {
      setSaved([...doc.data().saved])
    })
    return () => unsub()
  }, [])

  useEffect(async () => {
    const readIds = async (saveList) => {
      const reads = await saveList.map((item) => {
        const res = getPaperByCategory(item.category)
        return res
      })
      const result = await Promise.all(reads)
      return result.map((v) => {
        return v
      })
    }

    if (saved?.length !== 0)
      readIds(saved)
        .then((res) => {
          const len = res.length-1
          let data = []
          for(let i =0; i<len; i++){
            data = data.concat([...new Set([...res[i]])])
          }
          const catList = saved.map((item)=> item.id)
          const filtered = data.filter((item)=> catList.includes(item.id) )
          setPapers(filtered)
          setLoading(false)
        })
        .catch((err) => console.log(err))
  }, [saved])

  if(loading){
    return 'loading...'
  }

  return (
    <div className="library-page">
      <div className="header">
        <h1>Your Library</h1>
      </div>
      {papers?.length === 0 ? (
        <div className="empty-library">
          <h2>Your Library is Empty.</h2>
        </div>
      ) : (
        <div className="card-section row">
          {papers?.map((paper, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <Link to={`/category/${paper.domain.toLowerCase()}/detail/${paper.id}`}>
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
      )}
    </div>
  )
}

export default Library;
