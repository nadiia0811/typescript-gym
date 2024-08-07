import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ClassType } from "@/shared/types";
import Class from "./Class";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
    {
      name: "Weight Training Classes",
      description: `Our weight training classes build muscle and strength
        using free weights and machines. Suitable for all levels. Enjoy personalized 
        guidance, a supportive environment, 
        and achieve your fitness goals. Join us to boost strength and overall fitness.`,
      image: image1
    },
    {
        name: "Yoga Classes",
        description: `Our weight training classes build muscle and strength
          using free weights and machines. Suitable for all levels. Enjoy personalized 
          guidance, a supportive environment, 
          and achieve your fitness goals. Join us to boost strength and overall fitness.`,
        image: image2
      },
      {
        name: "Ab Core Classes",
        description: `Our weight training classes build muscle and strength
          using free weights and machines. Suitable for all levels. Enjoy personalized 
          guidance, a supportive environment, 
          and achieve your fitness goals. Join us to boost strength and overall fitness.`,
        image: image3
      },
      {
        name: "Adventure Classes",
        description: `Our weight training classes build muscle and strength
          using free weights and machines. Suitable for all levels. Enjoy personalized 
          guidance, a supportive environment, 
          and achieve your fitness goals. Join us to boost strength and overall fitness.`,
        image: image4
      },
      {
        name: "Fitness Classes",
        description: `Our weight training classes build muscle and strength
          using free weights and machines. Suitable for all levels. Enjoy personalized 
          guidance, a supportive environment, 
          and achieve your fitness goals. Join us to boost strength and overall fitness.`,
        image: image5
      },
      {
        name: "Training Classes",
        description: `Our weight training classes build muscle and strength
          using free weights and machines. Suitable for all levels. Enjoy personalized 
          guidance, a supportive environment, 
          and achieve your fitness goals. Join us to boost strength and overall fitness.`,
        image: image6
      },
];

const OurClasses = ({setSelectedPage}: Props) => {
 
  return (
    <section className="w-full bg-primary-100 md:py-40 py-10"
             id={`${SelectedPage.OurClasses}`}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration: 0.5}}
          variants={{
             hidden: {opacity: 0, x: -50},
             visible: {opacity: 1, x: 0}
          }}>
            <div className="md:w-3/5 mx-auto">
                <HText>OUR CLASSES</HText>
                <p className="py-5 w-5/6 mx-auto text-base md:text-2xl">Our gym offers a variety of 
                   classes to suit all fitness levels and interests. 
                   High-intensity interval training (HIIT) provides a challenging workout, while 
                   yoga sessions focus on flexibility and mental well-being. Spin classes deliver
                   a vigorous cardio experience with motivating music and instructors.
                </p>

                 <p className="py-5 w-5/6 mx-auto text-base md:text-2xl">Led by experienced instructors, our 
                    classes ensure personalized attention 
                    and modifications for all participants. Whether you're a beginner or an experienced athlete,
                    our gym has something for everyone.
                </p>
            </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
               <Class key={`${item.name}-${index}`}
                      name={item.name}
                      description={item.description}
                      image={item.image}/>
            ))}
          </ul>
        </div>
      </motion.div>
     
    </section>
  )
}

export default OurClasses;