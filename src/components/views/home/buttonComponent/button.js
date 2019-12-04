import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = () => {
  return (
    <div>
      <Link
        to="/userRepos"
        className="button primary"
        style={{ textDecoration: "none" }}
      >
        Go to Repos
      </Link>
    </div>
  );
};

export default Button;
