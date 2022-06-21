import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [user, setUser] = useState([]);
  const [signout, setSignout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser({
      name: sessionStorage.getItem("name"),
      picture: sessionStorage.getItem("picture")
    });
    console.log(user);
  }, [props, user.name, signout]);

  const onLogout = () => {
    sessionStorage.clear();
    setSignout(true);
    console.log("onLogout");
    navigate("/signin")
  };

  return (
    <div>
      <div className="header">
        <div className="h_title">
          <Link to="/">AllEvents Assignment</Link>
        </div>
        <div className="h_pic">
          <div className="menu">
            <Link className="btn btn-info" to="/create-event">
              Create Event
            </Link>
            {user.name !== null ? (
              <>
                <div className="btn btn-outline-danger" onClick={onLogout}>
                  Sign Out
                </div>
              </>
            ) : (
              <>
                <Link className="btn btn-info" to="/signin">
                  Sign In
                </Link>
              </>
            )}
          </div>
          <p className="text-nowrap">{user?.name}</p>
          <img src={user?.picture} />
        </div>
      </div>
    </div>
  );
}

export default Header;
