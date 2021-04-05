import About from "../components/About";
import Services from "../components/Services";
import Faq from "../components/Faq";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function HomePage() {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <About />
      <Services />
      <Faq />
    </motion.div>
  );
}

export default HomePage;
