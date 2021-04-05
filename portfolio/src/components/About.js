import designer from "../img/carmen.png";
import { StyledDiv, StyledDescription, StyledImage } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

function About() {
  return (
    <StyledDiv>
      <StyledDescription>
        <motion.div>
          <div className="hide">
            <motion.h1 variants={titleAnimation}>I want to make</motion.h1>
          </div>
          <div className="hide">
            <motion.h1 variants={titleAnimation}>
              {" "}
              your <span>dreams</span> come{" "}
            </motion.h1>
          </div>
          <div className="hide">
            <motion.h1>true.</motion.h1>
          </div>
        </motion.div>
        <p variants={fade}>
          Contact me for any design or illustration ideas you have. We support
          you with professional and amazing skills.{" "}
        </p>
        <Link to="/contacts">
          <button variants={fade}>Contact me</button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <img
          src={designer}
          variants={photoAnimation}
          alt="Ups.."
          className="homePageImg"
        />
      </StyledImage>
      <Wave />
    </StyledDiv>
  );
}

export default About;
