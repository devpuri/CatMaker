import "../App.css";
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
                  This is the CatMaker app
               </h1>
            </div>
         </section>
         <Footer />
      </>
   );
}
