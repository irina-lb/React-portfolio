import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import desk from "../img/desk.jpg";
import {
  StyledDiv,
  StyledDescription,
  StyledImage,
  Cards,
  Card,
} from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { cards } from "../util";

function Services() {
  const [element, controls] = useScroll();
  return (
    <StyledSection
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          What is <span>my art</span> ?
        </h2>
        <Cards>
          {cards.map((card) => {
            return (
              <Card key={card.title}>
                <div className="icon">
                  <FontAwesomeIcon icon={card.icon} size="2x" />
                  <h3>{card.title}</h3>
                </div>
                <p>{card.text}</p>
              </Card>
            );
          })}
        </Cards>
      </StyledDescription>
      <StyledImage>
        <img src={desk} alt="Ups.." className="homePageImg" />
      </StyledImage>
    </StyledSection>
  );
}

const StyledSection = styled(StyledDiv)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  span {
    color: #fedc56;
  }
`;

export default Services;
