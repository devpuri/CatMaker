import "../App.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function HomePage() {
   return (
      <>
         <header>
            <Navbar />
         </header>
         <section className="hero-section">
            <div className="hero-content">
               <h1 className="hero-tagline">
                  You Manage Your Work, <br></br>
                  We Manage Your Workplace
               </h1>
               <p className="longer-tagline">
                  {" "}
                  You need reliable talent and a staffing partner who
                  understands your business. When you partner with Aumni, You
                  will receive:
               </p>
               <ul className="tagline-usp">
                  <li className="tagline-usp-list">
                     <p>
                        {" "}
                        <FaRegSquareCheck /> Access to top Talent
                     </p>
                  </li>
                  <li className="tagline-usp-list">
                     <p>
                        {" "}
                        <FaRegSquareCheck /> Flexible and scalable workforce
                        solutions
                     </p>
                  </li>
                  <li className="tagline-usp-list">
                     <p>
                        {" "}
                        <FaRegSquareCheck /> Responsive account management
                     </p>
                  </li>
               </ul>
               <a href="#contact" className="cta-button">
                  Get in Touch!
               </a>
            </div>
         </section>
         <Footer />
      </>
   );
}
