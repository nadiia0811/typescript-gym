import Logo from "@/assets/Logo.png";
import {FaFacebook, FaTwitter, FaPinterest} from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";


const Footer = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:700px)");
  return (
    <footer className="bg-primary-100 md:py-16 py-3">
      <div className="mx-auto justify-content w-5/6 gap:16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" className="mb-7"/>
          <p className="flex-col gap-5 flex">
            <p>
              <span className="font-bold md:text-xl">Flexible Memberships:</span><br></br>
              We offer various membership plans to fit your schedule and lifestyle.<br></br>
            </p>           
            <p>
              <span className="font-bold md:text-xl">Community Focus:</span><br></br>
              Join a supportive community that encourages and inspires you to reach your fitness goals.<br></br> 
            </p>         
            <p className="mb-7">
              <span className="font-bold md:text-xl">Convenient Location:</span><br></br>
              Easily accessible with ample parking and public transport options.<br></br>
            </p>
          </p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0 md:flex">
          <div className="basis-1/2 flex flex-col mr-50 sm:mb-20 mb-5">
            <p className="font-bold md:text-2xl text-md">CONTUCT US:</p>
            <p className="md:text-xl text-base font-semibold pt-5">
              <span>35-312</span><br/>
                Rzeszow, 3 Maja street, 18a <br/>
                Phone: 922-117-292
            </p>
            <p className="md:text-xl text-base font-semibold pt-5">
              <span>01-200</span><br></br>
                Warsaw, Lewakowska street, 5 <br />
                Phone: 922-117-292
            </p>
          </div>
    
          {isAboveMediumScreens ? (
            <div className="flex flex-col basis-1/2">
              <p className="font-bold text-2xl  mb-7">WE IN SOCIAL MEDIA:</p>
              <div className="flex justify-center mb-6 cursor-pointer">
                <FaFacebook size={40} />
              </div>
              <div className="flex justify-center mb-6 cursor-pointer"><FaTwitter size={40}/></div>
              <div className="flex justify-center mb-6 cursor-pointer"><FaPinterest size={40}/></div>
            </div>) : (
            <div className="flex gap-16 mt-5">
              <p className="font-bold text-base mb-4 mr-15">WE IN SOCIAL MEDIA:</p>
              <div className="inline-block flex gap-4">
                <FaFacebook size={25} />
                <FaTwitter size={25} />
                <FaPinterest size={25} />
              </div>
            </div>
            )}      
        </div>
      </div>
      <p className="font-semibold mt-6 flex justify-center text-sm md:text-base">
        &copy;  EVOGYM All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer;