import React, { useEffect, useState, useContext } from "react";

// importing components
import Card from "../../Components/Card";

// importing styles
import "./style.css";

// importing react-router-dom
import { Link } from "react-router-dom";

// importing firebase
import { collection, getDocs, getDoc, doc, query, setDoc} from "firebase/firestore";
import { firestore } from "../../Firebase/config";
import { AuthContext } from "../../Context/Firebase";
import { getFirestore } from "firebase/firestore"
import sub1 from "../../Data/Astronomy/sub1";
import sub2 from "../../Data/Astronomy/sub2";

const Home = () => {
  const [papers, setPapers] = useState([]);
  const { user } = useContext(AuthContext);
  const docRef = collection(firestore, "papers");
  const getData = async () => {
    const querySnapshot = await getDocs(docRef);
    const paperData = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    paperData.length = 6;
    setPapers(paperData);
  };
  useEffect(() => {
    getData();
    console.log(user?.uid);
  }, []);

  const insertData = async()=>{
    const docRef = collection(firestore, "researchPapers");
    await setDoc(doc(docRef, "papers"), {
      astronomy: [...sub1, ...sub2]
    });
//     const docRef = doc(firestore, "researchPapers", "papers");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
}


  return (
    <div className="home-page">
      <button onClick = {insertData}>insert data</button>
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
