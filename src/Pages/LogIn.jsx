import React, { useState } from "react";

import Navbar from "../Components/Navbar";

import "../CSS/logIn.css";

export default function LogIn(props) {
   let [authMode, setAuthMode] = useState("signin");

   const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin");
   };

   if (authMode === "signin") {
      return (
         <>
            <header>
               <Navbar />
            </header>

            <div className="Auth-form-container">
               <form className="Auth-form">
                  <div className="Auth-form-content">
                     <h3 className="Auth-form-title">Sign In</h3>
                     <div className="text-center">
                        Not registered yet?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                           Sign Up
                        </span>
                     </div>
                     <div className="form-group mt-3">
                        <label className="title-label">Email address</label>
                        <div class="field">
                           <input
                              className="inputf"
                              type="email"
                              placeholder="e.g abc@example.com"
                           />
                           <div class="line"></div>
                        </div>
                     </div>
                     <div className="form-group mt-3">
                        <label className="title-label">Password</label>
                        <div class="field">
                           <input
                              className="inputf"
                              type="password"
                              placeholder="e.g janedoe@gmail.com"
                           />
                           <div class="line"></div>
                        </div>
                     </div>
                     <div className="sub-btn-cont">
                        <button type="submit" className="btn btn-sub">
                           Submit
                        </button>
                     </div>
                     <p className="forgot-pass-cont">
                        Forgot <a href="#">password?</a>
                     </p>
                  </div>
               </form>
            </div>
         </>
      );
   }

   return (
      <>
         <header>
            <Navbar />
         </header>
         <div className="Auth-form-container">
            <form className="Auth-form">
               <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="text-center">
                     Already registered?{" "}
                     <span className="link-primary" onClick={changeAuthMode}>
                        Sign In
                     </span>
                  </div>
                  <div className="form-group mt-3">
                     <div className="title-label">
                        <label>Full Name</label>
                     </div>
                     <div class="field">
                        <input
                           className="inputf"
                           type="name"
                           placeholder="e.g Jane Doe"
                        />
                        <div class="line"></div>
                     </div>
                  </div>
                  <div className="form-group mt-3">
                     <div className="title-label">
                        <label>Email address</label>
                     </div>
                     <div class="field">
                        <input
                           className="inputf"
                           type="email"
                           placeholder="e.g janedoe@gmail.com"
                        />
                        <div class="line"></div>
                     </div>
                  </div>
                  <div className="form-group mt-3">
                     <div className="title-label">
                        <label>Password</label>
                     </div>
                     <div class="field">
                        <input
                           className="inputf"
                           type="password"
                           placeholder="Password"
                        />
                        <div class="line"></div>
                     </div>
                  </div>
                  <div className="sub-btn-cont">
                     <button type="submit" className="btn btn-sub">
                        Submit
                     </button>
                  </div>
                  <p className="forgot-pass-cont">
                     Forgot <a href="#"> password?</a>
                  </p>
               </div>
            </form>
         </div>
      </>
   );
}
