import styled from "styled-components";
import { Link } from "react-router-dom";
import { WorkState } from "../util";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from "../animation";

function OurWork() {
  const [works] = useState(WorkState);
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <StyledWorkDiv>
        {works.map((work) => (
          <StyledWorkImg key={work.title}>
            <motion.h2 variants={fade}>{work.title}</motion.h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to={work.url}>
              <motion.img
                variant={photoAnimation}
                src={work.mainImg}
                alt="Ups.."
              />
            </Link>
          </StyledWorkImg>
        ))}
      </StyledWorkDiv>
    </motion.div>
  );
}

const StyledWorkDiv = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    color: white;
    padding: 1rem 0rem;
  }
`;
const StyledWorkImg = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.2rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
