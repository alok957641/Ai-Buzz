import Navbar from "./Component/Navbar/Navbar"
import Home from "./Component/Home/Home"
import About from "./Component/About/About"
import Misson from "./Component/Our-Misson/Misson"
import HowitWorks from "./Component/HowItWorks/HowItWorks"
import Services from "./Component/Services/Services"
import Stats from "./Component/Stats/Stats"
import Testimonials from "./Component/Testimonials/Testimonials"
import Contect from "./Component/Contect/Contect"
import Footer from "./Component/Footer/Footer"
import Creators from "./Component/Creators/Creators"


function App() {
  

  return (
    <>
      
   <Navbar />
   <Home/>
   <About />
   <Misson/>
   <HowitWorks />
   <Services/>
   <Creators/>
   <Stats/>
   <Testimonials/>
   <Contect/>
   <Footer/>
      
    </>
  )
}

export default App
