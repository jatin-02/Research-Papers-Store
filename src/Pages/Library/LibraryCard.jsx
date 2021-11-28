import React, { useContext } from "react";
import "../../Components/Card/style.css";

import { MdDeleteForever as DelIcon } from "react-icons/md";
import { Link } from "react-router-dom";
import { arrayRemove, doc, updateDoc } from "@firebase/firestore";
import { firestore } from "../../Firebase/config";
import { AuthContext } from "../../Context/Firebase";

const LibraryCard = ({ title, id, topic, author, year }) => {
  const { user } = useContext(AuthContext);
  const uid = user?.uid;
  return (
    <div className="card">
      <div
        className="del-icon"
        onClick={() => {
          console.log(id);
          const delEle = async () => {
            await updateDoc(doc(firestore, "users", `${uid}`), {
              saved: arrayRemove(`${id}`),
            });
          };
          delEle();
        }}
      >
        <DelIcon />
      </div>
      <div className="card-container">
        <Link to={`/detail/${id}`}>
          <div className="card-heading">
            <h1>{title}</h1>
          </div>

          <div className="card-content">
            <div className="card-name card-detail">
              <p>
                <span>Topic:</span> {topic}
              </p>
            </div>

            <div className="card-author card-detail">
              <p>
                <span>Author:</span> {author}
              </p>
            </div>

            <div className="card-year card-detail">
              <p>
                <span>Year of publication:</span> {year}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LibraryCard;
