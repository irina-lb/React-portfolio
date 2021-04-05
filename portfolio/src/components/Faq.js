import { StyledDiv } from "../styles";
import styled from "styled-components";
import Toggle from "./Toggle";
import { questions } from "../util";

function Faq() {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {questions.map((question) => {
        return (
          <div className="question" key={question.question}>
            <Toggle title={question.question}>
              <div className="answer">
                <p>{question.firstParagraph}</p>
                <p>{question.secondParagraph}</p>
              </div>
            </Toggle>
          </div>
        );
      })}
    </StyledFaq>
  );
}

const StyledFaq = styled(StyledDiv)`
  display: block;
  span {
    display: block;
  }
  .faq-line {
    background: #cccccc;
    height: 0.1rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }
  .question {
    padding: 0.5rem 0rem;
    cursor: pointer;
    font-weight: normal;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Faq;
