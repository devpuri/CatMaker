import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/logIn.css";
import loginValidation from "../LoginValidation";
import { auth } from "../firebase/firebase";

export default function LogIn(props) {
   const [userCredentials, setUserCredentials] = useState({});

   // Switches between login and signUp state
   let [authMode, setAuthMode] = useState("signin");

   const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin");
   };

   // Checks Validation for Login
   const [values, setValues] = useState({
      name,
      email: "",
      password: "",
   });

   const [errors, setErrors] = useState({});

   const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(loginValidation(values));
   };

   const handleInput = (event) => {
      setValues((prev) => ({
         ...prev,
         [event.target.name]: [event.target.value],
      }));
   };

   function handleCredentials(e){
      setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
      console.log(userCredentials);
   };

   function handleSignup(e) {
      e.preventDefault();
   }

   if (authMode === "signin") {
      return (
         <>
            <header>
               <Navbar />
            </header>

            <div className="Auth-form-container">
               <form className="Auth-form" onSubmit={handleSubmit}>
                  <div className="Auth-form-content">
                     <h3 className="Auth-form-title">Sign In</h3>
                     <div className="text-center">
                        Not registered yet?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                           Sign Up
                        </span>
                     </div>

                     {/* Email Box */}
                     <div className="Email-box">
                        <div className="form-group">
                           <label className="title-label">Email address</label>
                           <div className="field">
                              <input
                                 type="email"
                                 name="email"
                                 className="inputf"
                                 placeholder="Enter email"
                                 onChange= {(e)=>{handleCredentials(e); handleInput}}
                              />
                              <div className="line"></div>
                           </div>
                        </div>
                        <div className="error-box">
                           {errors.email && (
                              <span className="error-text">
                                 *{errors.email}
                              </span>
                           )}
                        </div>
                     </div>

                     {/* Password Box */}
                     <div className="Email-box">
                        <div className="form-group">
                           <label className="title-label">Password</label>
                           <div className="field">
                              <input
                                 type="password"
                                 name="password"
                                 className="inputf"
                                 placeholder="Enter password"
                                 onChange= {(e)=>{handleCredentials(e); handleInput}}
                              />
                              <div className="line"></div>
                           </div>
                        </div>
                        <div className="error-box">
                           {errors.password && (
                              <span className="error-text">
                                 *{errors.password}
                              </span>
                           )}
                        </div>
                     </div>

{/* Log In Btn */}
                     <div className="button-box">
                        <button 
                        onClick={(e) => (handleSignup(e))}
                        type="submit" className="btn btn-submit">
                           Submit
                        </button>
                     </div>
                     <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                     </p>
                  </div>
               </form>
            </div>
         </>
      );
   }

   // Sign Up
   return (
      <>
         <header>
            <Navbar />
         </header>
         <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
               <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="text-center">
                     Already registered?{" "}
                     <span className="link-primary" onClick={changeAuthMode}>
                        Sign In
                     </span>
                  </div>

                  {/* Name Box */}
                  <div className="Email-box">
                     <div className="form-group mt-3">
                        <div className="title-label">
                           <label>Full Name</label>
                        </div>
                        <div className="field">
                           <input
                              onChange= {(e)=>{handleCredentials(e); handleInput}}
                              className="inputf"
                              type="name"
                              placeholder="e.g Jane Doe"
                              name="name"
                           />
                           <div className="line"></div>
                        </div>
                     </div>
                     <div className="error-box">
                        {errors.name && (
                           <span className="error-text"> *{errors.name}</span>
                        )}
                     </div>
                  </div>

                  {/* Email Box */}
                  <div className="Email-box">
                     <div className="form-group mt-3">
                        <div className="title-label">
                           <label>Email address</label>
                        </div>
                        <div className="field">
                           <input
                              onChange= {(e)=>{handleCredentials(e); handleInput}}
                              type="email"
                              className="inputf"
                              placeholder="Email Address"
                              name="email"
                           />
                           <div className="line"></div>
                        </div>
                     </div>

                     <div className="error-box">
                        {errors.email && (
                           <span className="error-text"> *{errors.email}</span>
                        )}
                     </div>
                  </div>

                  {/* Password Box */}
                  <div className="Email-box">
                     <div className="form-group mt-3">
                        <div className="title-label">
                           <label>Password</label>
                        </div>
                        <div className="field">
                           <input
                              onChange= {(e)=>{handleCredentials(e); handleInput}}
                              type="password"
                              className="inputf"
                              placeholder="Password"
                              name="password"
                           />
                           <div className="line"></div>
                        </div>
                     </div>
                     <div className="error-box">
                        {errors.password && (
                           <span className="error-text">
                              {" "}
                              *{errors.password}
                           </span>
                        )}
                     </div>
                  </div>

{/* Sign up Btn */}
                  <div className="button-box">
                     <button 
                     onClick={(e) => (handleSignup(e))}
                     type="submit" 
                     className="btn btn-submit">
                        Submit
                     </button>
                  </div>
                  <p className="text-center mt-2">
                     Forgot <a href="#">password?</a>
                  </p>
               </div>
            </form>
         </div>
      </>
   );
}
