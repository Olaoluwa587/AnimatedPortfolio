import "./app.scss"
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Test from "./test.jsx";
import Parallax from "./components/parallax/parallax.jsx";
import Services from "./components/services/services.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import Contact from "./components/contact/contact.jsx";
const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>

    <section id="Services"> <Parallax type="services"/> </section>
    <section> <Services/> </section>
    <section id="portfolio"> <Parallax type="portfolio"/> </section>
     <Portfolio/> 
    <section id="Contact"><Contact/></section>
  {/* <Test/> */}
  </div>;
};

export default App;
