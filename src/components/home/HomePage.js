import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <img src="../favicon.svg" height="100" width="100"></img>
    <h1>LightHouse Manager</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>

    <div>
      <small className="text-muted">
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
          Good Ware
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </small>
    </div>
    <br />
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
