import "../App.css";
import "../CSS/homePage.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function HomePage() {
   return (
      <>
         <header>
            <Navbar />
         </header>
         <section className="hero-section">
            <div className="hero-content">
               <h1 className="hero-tagline">
                  Learn New Skills and <br></br>Become Your Smartest Self
               </h1>

               <div className="question-box">
                  <h1>Add Your Question</h1>
               </div>
            </div>
         </section>
         <Footer />
      </>
   );
}
