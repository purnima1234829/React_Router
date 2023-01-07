import React from "react";
import { useParams, Link } from "react-router-dom";

function Head() {
  const params = useParams();
  const { name, lname, info } = params;

  return (
    <div className="styles">
      <br />
      <br />
      <h2>
        {" "}
        Mr.{name} {lname}{" "}
      </h2>
      <br />
      <h4>{info}</h4>
      <Link to="/about">Go to about Page</Link>

      <br />
    </div>
  );
}
export default Head;
