import jslogo from "../img/js-logo.jpg";
import React, { useEffect, useState } from "react";
import { Container, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { getQuizLocalStorage, setQuizLocalStorage } from "../common/functions";
import { questions } from "../common/questions";
import { useNavigate } from "react-router";
import DisplayQuestion from "./DisplayQuestion/DisplayQuestion";

export default function QuizPage() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const navigate = useNavigate();
  const localData = getQuizLocalStorage();

  useEffect(() => {
    window.hljs.highlightElement(document.querySelector("pre code"));
  }, [activeQuestion]);

  const showNextQuestion = () => {
    let activeQuestion = localData.activeQuestion;
    if (activeQuestion === questions.length - 1) {
      setQuizLocalStorage({ isCompleted: true });
      navigate("/score");
    }
    setQuizLocalStorage({
      activeQuestion: activeQuestion + 1,
    });
    setActiveQuestion(activeQuestion + 1);
  };

  return (
    <Container>
      <div className="title">
        <img src={jslogo} alt="JS Logo" className="js-logo" />
        <span>Quiz</span>
      </div>
      <Stat>
        <StatLabel>Question</StatLabel>
        <StatNumber>{`${activeQuestion + 1} / ${
          localData.quizLength
        }`}</StatNumber>
      </Stat>

      <DisplayQuestion
        data={questions[activeQuestion]}
        activeQuestion={activeQuestion}
        showNextQuestion={showNextQuestion}
      />
    </Container>
  );
}
