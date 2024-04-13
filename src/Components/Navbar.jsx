import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./CSS/Navbar.css";
import { 
	IoMdClose,
	IoMdMenu,
 } from "react-icons/io";

export default function Navbar() {
   const [nav, setNav] = useState(false);

   const toggleNav = () => {
      setNav(!nav);
   };

   if (nav) {
      document.body.classList.add("active-nav");
   } else {
      document.body.classList.remove("active-nav");
   }

   return (
      <div className="nav">
         <div className="nav-header">
            <NavLink className="nav-title" to="/">
               CatMaker
            </NavLink>
         </div>

         {!nav && (
            <button className="hamburgerMenu" onClick={toggleNav}>
               < IoMdMenu/>
            </button>
         )}

         {nav && (
				<>
            <div className="hb-nav">
					{/* <NavLink to="../about">About</NavLink>
					<NavLink to="../services">Service</NavLink> */}
					<NavLink to="../logIn">Log In</NavLink>
					{/* <NavLink to='../blogs'>
							Blogs
						</NavLink> */}
            </div>
				<button className="hamburgerMenu" onClick={toggleNav}>
               <IoMdClose />
            </button>
				</>
				
         )}

         <div className="nav-links">
            {/* <NavLink to="../about">About</NavLink>
            <NavLink to="../services">Service</NavLink> */}
            <NavLink to="../logIn">LogIn</NavLink>
            {/* <NavLink to='../blogs'>
          			Blogs
        			</NavLink> */}
         </div>
      </div>
   );
}
