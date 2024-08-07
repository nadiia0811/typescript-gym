import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home/Home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Benefits from "@/scenes/benefits/Benefits";
import OurClasses from "./scenes/ourClasses/OurClasses";
import ContactUs from "./scenes/contactUs/ContactUs";
import Footer from "./scenes/footer/Footer";
import { ToastContainer, Slide } from 'react-toastify';


function App() {
  
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY == 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if(window.scrollY != 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div className="bg-gray-20">
     <Navbar selectedPage={selectedPage}
             setSelectedPage={setSelectedPage}
             isTopOfPage={isTopOfPage}/>

      <Home setSelectedPage={setSelectedPage}/> 
      <Benefits setSelectedPage={setSelectedPage}/> 
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/> 
      <ToastContainer transition={Slide}/>
      <Footer />    
   </div>
  )
}

export default App;
