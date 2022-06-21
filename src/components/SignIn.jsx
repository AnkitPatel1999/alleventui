import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "./signin.css";

function SignIn() {
  const [user, setUser] = useState([]);

  let navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async res => {
      const access_token = res.access_token;
      console.log(access_token);

      await axios
        .post("http://localhost/alleventapi/api/user/login.php", res)
        .then(res => {
          console.log(res);
          setUser({ name: res.data.name, picture: res.data.picture });
          sessionStorage.setItem("name", res.data.name);
          sessionStorage.setItem("picture", res.data.picture);
          alert("Login successfully")
          navigate("/")
        })
        .catch(error => {
          console.log(error);
        });
    }
  });

  // const logOut = () => {
  //   console.log(googleLogout());
  // };
  return (
    <div>
      <Header user={user} />
      <div className="text-center mt-5">
        <div className="btn btn-outline-primary" onClick={() => login()}>
          Sign in with Google
        </div>
      </div>
    </div>
  );
}

export default SignIn;
