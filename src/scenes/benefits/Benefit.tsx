import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element,
  title: string,
  description: string,
  setSelectedPage: (value: SelectedPage) => void
};

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: { opacity: 1, scale: 1}
};


const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <div className="mt-5 rounded:md border-2 border-gray-100 px-5 py-16 text-center">
      <motion.div className="mb-4 flex justify-center"
                  variants={childVariant}>
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </motion.div>
      <h4 className="font-bold">{title}</h4>
      <p className="py-2">{description}</p>
      <AnchorLink className="text-base font-bold text-primary-500 
                             underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.Benefits)}
                        href={`#${SelectedPage.Benefits}`}>
        Learn more
      </AnchorLink>
    </div>
  )
}

export default Benefit;