import React from "react";
import Button from "../buttonComponent/button";
import "./userCard.css";

const UserCard = ({ userData }) => {
  const helper = () => {
    if (userData.name === undefined) {
      return <div style={{ height: "200px" }}></div>;
    } else {
      console.log(userData);
      return (
        <div className="row">
          <div className="col-md-5">
            <img
              src={userData.avatar_url}
              className="img-fluid rounded-circle image"
              alt="userImage"
              style={{ width: "75%", display: "block", margin: "0 auto" }}
            />
          </div>
          <div className="col-md-7 content">
            <ul style={{ marginTop: "5%" }}>
              <li>Name: {userData.name}</li>
              <li>Public Repos: {userData.public_repos}</li>
              <li>Followers: {userData.followers}</li>
              <li>Following: {userData.following}</li>
              <li>Location: {userData.location}</li>
              <li>
                <a
                  href={userData.html_url}
                  target={"_blank"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Link: {userData.url}
                </a>
              </li>
              <Button />
            </ul>
          </div>
        </div>
      );
    }
  };

  return <div className="container">{helper()}</div>;
};

export default UserCard;
