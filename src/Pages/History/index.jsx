import React from "react"
import Card from "../../Components/Card"
import {Link} from 'react-router-dom'
import './style.css'
const History = () => {
  const dates = ['25-05-2020' ,'28-05-2020']
  return(
    <div className = "history-page">

      <div className="header">
        <h1>History</h1>
      </div>
    
    <div className="main">
        
    {dates.map((date)=>{
      return <section className="date">

          <div className="date-header">
            <h2>{date}</h2>
          </div>
          <div className="date-items">
            <div className="col-lg-4 col-md-6 col-12 ">
                  <Link to="/detail">
                    <Card />
                  </Link>
              </div>

              <div className="col-lg-4 col-md-6 col-12 ">
                <Link to="/detail">
                  <Card />
                </Link>
              </div>
          </div>
      
      </section>
    })}

    </div>
  </div>
  )
};

export default History;
