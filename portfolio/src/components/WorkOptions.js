import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { WorkState } from "../util";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import { motion } from "framer-motion";

function WorkOptions() {
  const history = useHistory();
  const url = history.location.pathname;
  const [works] = useState(WorkState);
  const [work, setWork] = useState(null);

  useEffect(() => {
    const currentWork = works.filter((stateWork) => stateWork.url === url);
    setWork(currentWork[0]);
  }, [works, url]);

  return (
    <>
      {work && (
        <StyledDetails
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <StyledHeadLine>
            <h2>{work.title}</h2>
            <img src={work.mainImg} alt="Ups..." />
          </StyledHeadLine>
          <StyledAwards>
            {work.awards.map((award) => (
              <AwardStyle>
                <h3>{award.title}</h3>
                <div className="line"></div>
                <p>{award.description}</p>
              </AwardStyle>
            ))}
          </StyledAwards>
          <ImageDisplay>
            <img src={work.secondaryImg} alt="Ups..." />
          </ImageDisplay>
        </StyledDetails>
      )}
    </>
  );
}

const StyledDetails = styled(motion.div)`
  color: white;
`;
const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
    margin: 0 auto;
  }
`;
const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default WorkOptions;
