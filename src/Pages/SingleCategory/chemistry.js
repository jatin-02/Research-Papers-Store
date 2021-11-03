import Card from "../../Components/Card";
import { Link } from "react-router-dom";
import "./style.css";

// importing data
import sub1 from "../../Data/Chemistry/sub1";
import sub2 from "../../Data/Chemistry/sub2";
import sub3 from "../../Data/Chemistry/sub3";

const Chemistry = () => {
  return (
    <div className="category-page">
      <div className="header">
        <h1>Chemistry</h1>
      </div>

      <div className="main">
        <section className="subdomains">
          <div className="subdomain-header">
            <h2>Analytical chemistry</h2>
          </div>
          <div className="subdomain-items">
            {sub1.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 ">
                  <Link to="/detail">
                    <Card
                      title={item.title}
                      topic={item.topic}
                      author={item.author}
                      year={item.year}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="main">
        <section className="subdomains">
          <div className="subdomain-header">
            <h2>Inorganic chemistry</h2>
          </div>
          <div className="subdomain-items">
            {sub2.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 ">
                  <Link to="/detail">
                    <Card
                      title={item.title}
                      topic={item.topic}
                      author={item.author}
                      year={item.year}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="main">
        <section className="subdomains">
          <div className="subdomain-header">
            <h2>Organic chemistry</h2>
          </div>
          <div className="subdomain-items">
            {sub3.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 ">
                  <Link to="/detail">
                    <Card
                      title={item.title}
                      topic={item.topic}
                      author={item.author}
                      year={item.year}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Chemistry;
