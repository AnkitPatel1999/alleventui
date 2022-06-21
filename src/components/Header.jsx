import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="h_title">
          <Link to="/">AllEvents Assignment</Link>
        </div>
        <div className="h_pic">
          <div className="menu">
              <Link className="btn btn-info" to="/create-event">Create Event</Link>
              <Link className="btn btn-info" to="/signin">Sign In</Link>
          </div>
          <p className="text-nowrap">{props.user?.name}</p>
          <img src={props.user?.picture} />
        </div>
      </div>
    </div>
  );
}

export default Header;
