import React from "react";
import { useState } from "react";

export default function Register(props)
{
    return( 
        <div>
        <h1 className="formTitle">Account Registration</h1>
        <label className="login--lable" htmlFor="">
          First Name:
        </label>
        <br />
        <input className="login--input" type="text" placeholder="First Name"/>
        <br />
        <label className="login--lable" htmlFor="">
          Last Name:
        </label>
        <br />
        <input className="login--input" type="text" placeholder="Last Name"/>
        <br />
        <label className="login--lable" htmlFor="">
          Email:
        </label>
        <br />
        <input className="login--input" type="email" placeholder="Email"/>
        <br />
        <label className="login--lable" htmlFor="">
          Password:
        </label>
        <br />
        <input className="login--input" type="password" placeholder="Password"/>
        <br />
        <label className="login--lable" htmlFor="">
          Confirm Password:
        </label>
        <br />
        <input className="login--input" type="password" placeholder="Confirm Password"/>
        <br />
        <button className="lg--submit">Submit</button>
      </div>
    )
}
