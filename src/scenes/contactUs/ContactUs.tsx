import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from "react";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
    const {register, trigger, reset, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = useCallback(
      handleSubmit(async () => {
        const isValid = await trigger(["name", "message", "email"]);

        if(isValid) {
          toast.success("Your message has been sent!", {
            position: "bottom-left",
            autoClose: 5000,
            theme: "light"
          });

          reset();
        }
      }), [trigger]
    );

    const inputStyles = `md:w-[600px] rounded-lg bg-primary-300 px-5 
                         py-1 md:py-3 placeholder-white mb-5 block w-full`;
  return(
    <section id={`${SelectedPage.ContactUs}`} className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/**Header*/}
            <motion.div className="md:w-3/5 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}>
                <HText>
                   <p className="md:text-3xl  text-xl">
                     <span className="text-primary-500">JOIN NOW</span>{" "}
                      TO GET IN SHAPE
                   </p> 
                </HText> 
                <p className="my-5 text-base md:text-2xl">
                   Unlock your potential and transform your body by joining our gym today! 
                   Our state-of-the-art facilities and expert trainers are here to guide you
                   every step of the way. Don't wait—start your fitness journey now and achieve 
                   the results you've always dreamed of!
                </p>                
            </motion.div>
            {/**Form and image*/}
            <div className="md:mt-20 mt-8 justify-between gap-8 md:flex ">
                <motion.div className="mt:10 basis-3/5 md:mt-0"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once:true, amount:0.5}}
                      transition={{duration: 0.5}}
                      variants={{
                          hidden: {opacity: 0, y: 50},
                          visible: {opacity: 1, y: 0}
                      }}>
                 <form method="POST"  className= "mx-auto"
                       target="_blank"
                       onSubmit={onSubmit}
                       action="https://formsubmit.co/7c0463d13d8aa099b2c33330a66b7604">
                    <input className={inputStyles} type="text" placeholder="NAME" 
                           {...register("name", {
                            required: true,
                            maxLength: 100
                           })}/>
                     {errors.name && (
                        <p className="-mt-5 text-base md:text-xl text-black font-semibold mb-5">
                          {errors.name.type === "required" && "This field is required."}
                          {errors.name.type === "maxLenght" && "Max lenght is 100 characters."}
                        </p>
                     )} 

                    <input className={inputStyles} type="text" placeholder="EMAIL" 
                           {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           })}/>
                     {errors.email && (
                        <p className="-mt-5 text-base md:text-xl text-black font-semibold mb-5">
                          {errors.email.type === "required" && "This field is required."}
                          {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                     )}          

                    <textarea className={inputStyles} placeholder="MESSAGE" id="textarea"
                              rows={4} cols={50}
                           {...register("message", {
                            required: true,
                            maxLength: 2000
                           })}/>
                     {errors.message && (
                        <p className="-mt-5 text-base md:text-xl text-black font-semibold mb-5">
                          {errors.message.type === "required" && "This field is required."}
                          {errors.message.type === "maxLength" && "Max lenght is 2000 characters."}
                        </p>
                     )} 

                     <button type="submit"
                             className="md:mt-5 mt-2 rounded-lg bg-secondary-500 md:px-20 px-10 font-bold 
                                        md:py-3 py-1 transition duration-500 hover:text-white mb-20" >
                       SUBMIT
                     </button>   
                 </form>
                </motion.div>
                <motion.div className="md:flex relative md:basis-2/5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 0.5}}
                  transition={{duration: 300, delay: 0.2}}
                  variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                  }}>
                    <div className="md:before:content-evolvetext w-full before:absolute 
                                    before:-bottom-20 before:-right-10 before:z-[1]">
                      <img src={ContactUsPageGraphic} alt="contact-us-page-graphic" 
                           className="md:w-full w-4/5 mx-auto opacity-1"/>
                    </div>                
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs;