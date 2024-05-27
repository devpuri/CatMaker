import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/logIn.css";
import loginValidation from "../LoginValidation";
import { auth } from "../firebase/firebase";
import axios from 'axios'; // Import Axios for making HTTP requests

export default function LogIn(props) {
   const [userCredentials, setUserCredentials] = useState({});

   // Switches between login and signUp state
   let [authMode, setAuthMode] = useState("signin");

   const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin");
   };

   // Checks Validation for Login
   const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
   });

   const [errors, setErrors] = useState({});

   const handleSubmit = async (event) => {
      event.preventDefault();
      setErrors(loginValidation(values));
      
      // Call backend function for user registration
      try {
         const response = await axios.post('YOUR_CLOUD_FUNCTION_URL', {
            ...values,
            isGoogleAuth: false, // Assuming manual signup
         });
         
         console.log(response.data);
         // Handle success or error response from the backend
      } catch (error) {
         console.error('Error registering user:', error);
         // Handle error
      }
   };

   const handleInput = (event) => {
      setValues((prev) => ({
         ...prev,
         [event.target.name]: event.target.value,
      }));
   };

   function handleCredentials(e){
      setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
      console.log(userCredentials);
   };

   if (authMode === "signin") {
      return (
         <>
            <header>
               <Navbar />
            </header>

            <div className="Auth-form-container">
               <form className="Auth-form" onSubmit={handleSubmit}>
                  {/* Rest of your signin form */}
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
               {/* Rest of your signup form */}
            </form>
         </div>
      </>
   );
}
