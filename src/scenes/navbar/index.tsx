import { Bars3Icon, XMarkIcon  } from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png";
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void; 
  isTopOfPage: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => { 
  const [isMenuToggled,setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    
  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 w-full md:py-6 py-3 opacity-100`}>
        <div className={`${flexBetween} mx-auto w-5/6 font-bold`}>
          <div className={`${flexBetween} w-full gap-16`}>

           {/* left side */}
            <img src={Logo} alt="logo" /> 
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>               
                  <div className={`${flexBetween} gap-8 text-lg`}>
                    <Link page={SelectedPage.Home} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page={SelectedPage.Benefits} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page={SelectedPage.OurClasses} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    <Link page={SelectedPage.ContactUs} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  </div>

                  {/*  right side */}
                  <div className={`${flexBetween} gap-8 text-lg`}>
                    <p>SIGN IN</p>
                    <ActionButton  setSelectedPage={setSelectedPage}>
                                  BECOME A MEMBER
                    </ActionButton>
                  </div>             
              </div>
            ) : (
              <button className="rounded-full bg-secondary-500 md:p-2 p-1"
                      onClick={() => setIsMenuToggled(!isMenuToggled)}>
                 <Bars3Icon className="w-6 h-6 text-white"/>
              </button>
            )}          
            
          </div>         
        </div>
      </div>

      {/* Mobile menu modal */}
      {!isAboveMediumScreens &&  (
        <div className={`fixed right-0 bottom-0 z-40 
                        h-full w-[200px] bg-primary-100
                        drop-shadow-xl transition-transform duration-500
                        ${isMenuToggled ? 'translate-x-0' : 'translate-x-full'}`}>
          {/*   Close icon  */} 
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="w-[22px] text-gray-400"/> 
            </button>            
          </div>

         {/*  Menu items */}
         <div className={`${flexBetween} gap-10 text-lg flex-col align-center`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
        </div>
      )
        }
    </nav>
  )
}

export default Navbar;
