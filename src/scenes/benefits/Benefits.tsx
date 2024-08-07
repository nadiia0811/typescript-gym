import { SelectedPage, BenefitType } from '@/shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";


const benefits: Array<BenefitType> = [
   {icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State Of The Art Facilities",
    description: "A modern fitness gym with state-of-the-art equipment, \
                 diverse classes, and expert trainers to achieve your goals."
   },
   {icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's Of Diverse Classes",
      description: "A modern fitness gym with state-of-the-art equipment, \
                   diverse classes, and expert trainers to achieve your goals."
     },
   {icon: <AcademicCapIcon className="h-6 w-6" />,
   title: "Expert And Pro Trainers",
   description: "A modern fitness gym with state-of-the-art equipment, \
                  diverse classes, and expert trainers to achieve your goals."
   }
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const container = {
   hidden: {},
   visible: {
     transition: {staggerChildren: 0.2}
   }
 };

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
       <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
          {/*Header*/}
          <motion.div className='md:my-5 md:w-3/5 mx-auto'
                      initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
                      transition={{delay: 0.2, duration: 0.5}}
                      variants={{
                        hidden: {opacity: 0, x: -50}, 
                        visible: {opacity: 1, x: 0} }}>
            <HText>
              MORE THAN JUST A GYM 
            </HText>
            <p className="my-5 text-base md:text-2xl">We provide world class fitness equipment, trainers and classes to get you to your
               ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
          </motion.div> 

          {/*Benefits*/} 
          <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                      initial="hidden" whileInView="visible"
                      viewport={{once: true, amount: 0.5}}
                      variants={container}>
             {benefits.map((benefit: BenefitType) => (
               <Benefit key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}/>
             ))}
          </motion.div>

          {/*Graphic and description*/}    
          <div className={`mt-16 items-center justify-between gap-20 md:mt-28 md:flex`}>
            {/*Graphic*/}
            <img className='mx-auto'
                 alt="benefits-page-graphic"
                 src={BenefitsPageGraphic}
                 />

            {/*Description*/}
            <div>
               {/*Title*/}
               <div className='relative'>
                  <div className='before:absolute before:-top-20 before:-left-20
                                  before:z-[-1] before:content-abstractwaves'>
                     <motion.div initial="hidden" whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        variants={{
                           hidden: {opacity: 0, x: -50},
                           visible: {opacity: 1, x: 0}
                        }}
                        transition={{duration: 0.5}}>
                        <HText>
                           MILLIONS OF HAPPY MEMBERS GETTING FIT
                        </HText>
                     </motion.div>               
                  </div>
                  {/*Descrript*/}
                  <motion.div className='text-base md:text-2xl'
                              initial="hidden" whileInView="visible"
                              viewport={{once: true, amount: 0.5}}
                              variants={{
                                hidden: {opacity: 0, x: -50},
                                visible: {opacity: 1, x: 0}
                              }}
                  transition={{duration: 0.5, delay: 0.2}}> 
                     <p className='my-5'>Our gym classes offer dynamic workouts, from high-intensity 
                        interval training to calming yoga sessions, tailored for all fitness levels.
                     </p>
                     <p className='mb-5'>Members improve strength, flexibility, and endurance 
                        while enjoying a supportive community, expert guidance, 
                        and a motivating atmosphere that makes fitness fun.
                     </p>
                  </motion.div>

               </div>

               {/*Description*/}

               {/*Button*/}
               <div className='relative mt-16'>
                  <div className='before:absolute before:-bottom-20 before:right-40
                                  before:content-sparkles before:z-[-1]'>
                     <ActionButton setSelectedPage={setSelectedPage}>
                        JOIN NOW
                     </ActionButton>
                  </div>
               </div>
            </div>
          </div>   
       </motion.div>             
    </section>
  )
}

export default Benefits;