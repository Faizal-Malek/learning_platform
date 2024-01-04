import React from "react";
import { useState } from "react";

export default function Login(props) {
  return (
    <div>
      <h1 className="formTitle">Account Login</h1>
      <label className="login--lable" htmlFor="">
        Email:
      </label>
      <br />
      <input className="login--input" type="text" placeholder="Email"/>
      <br />
      <label className="login--lable" htmlFor="">
        Password:
      </label>
      <br />
      <input className="login--input" type="password" placeholder="Password"/>
      <br />
        <a className="li--forgot--password">Forgot Password</a>
      <br />
      <button className="lg--submit">Submit</button>
    </div>
  );
}
