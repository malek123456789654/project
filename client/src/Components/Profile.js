import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { get_current } from "../redux/actions/authAction";

import MainProduct from "./MainProduct";
import Newproduct from "./Newproduct";

function Profile() {
  const clients = useSelector((state) => state.authReducer.client);
  console.log(clients);
  return (
    <div id="login-container">
      <div class="profile-img"></div>
      <h2>{clients.email}</h2>
      <div class="social">
        
      </div>
      <button> Sittings </button>
      {clients && clients.role == "admin" && (
        <>
          <Newproduct />
          <MainProduct />
        </>
      )}
    </div>
  );
}

export default Profile;
