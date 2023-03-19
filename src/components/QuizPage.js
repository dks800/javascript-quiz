import jslogo from "../img/js-logo.jpg";
import React, { useEffect, useState } from "react";
import { Container, ButtonGroup, Button } from "@chakra-ui/react";
import { getQuizLocalStorage, setQuizLocalStorage } from "../common/functions";

export default function QuizPage() {
  const [userSelection, setUserSelection] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const correctAnswer = 2;
  let x = `function sayHi() {
    console.log(name);
    console.log(age);
    var name = "Lydia";
    let age = 21;
  }
  
  sayHi();`;
  useEffect(() => {
    window.hljs.highlightElement(document.querySelector("pre code"));
  }, []);
  const localData = getQuizLocalStorage();
  const clickHandler = (e) => {
    const selected = e.target.dataset.name;
    const isCorrect = compare(selected, correctAnswer);
    if (userSelection > 0) return false;
    if (isCorrect) setIsCorrectAnswer(true);
    let activeQuestion = localData.activeQuestion;
    setQuizLocalStorage({
      answers: { ...localData.answers, [activeQuestion]: isCorrect },
    });
    setUserSelection(selected);
  };

  const handleNextQuestion = () => {
    let activeQuestion = localData.activeQuestion;
    setQuizLocalStorage({
      activeQuestion: activeQuestion + 1,
    });
    //TODO: Show Next Question
  };

  const compare = (num1, num2) => {
    return num1.toString() === num2.toString();
  };

  const getColorScheme = (number) => {
    if (compare(userSelection, number)) {
      return isCorrectAnswer ? "whatsapp" : "red";
    } else if (
      !isCorrectAnswer &&
      userSelection &&
      compare(correctAnswer, number)
    )
      return "whatsapp";
    return "messenger";
  };

  const getVariant = (num) => {
    if (
      compare(userSelection, num) ||
      (userSelection && !isCorrectAnswer && compare(num, correctAnswer))
    )
      return "solid";
    return "outline";
  };
  return (
    <Container>
      <div className="title">
        <img src={jslogo} alt="JS Logo" className="js-logo" />
        <span>Quiz</span>
      </div>
      <div>1. What's the output?</div>
      <pre>
        <code className="hljs language-javascript question">{x}</code>
      </pre>
      <ButtonGroup className="questions" size="sm">
        <Button
          colorScheme={getColorScheme("1")}
          variant={getVariant("1")}
          data-name="1"
          onClick={clickHandler}
        >
          Lydia and undefined
        </Button>
        <Button
          colorScheme={getColorScheme("2")}
          variant={getVariant("2")}
          data-name="2"
          onClick={clickHandler}
        >
          Lydia and ReferenceError
        </Button>
        <Button
          colorScheme={getColorScheme("3")}
          variant={getVariant("3")}
          data-name="3"
          onClick={clickHandler}
        >
          ReferenceError and 21
        </Button>
        <Button
          colorScheme={getColorScheme("4")}
          variant={getVariant("4")}
          data-name="4"
          onClick={clickHandler}
        >
          undefined and ReferenceError
        </Button>
      </ButtonGroup>
      {userSelection > 0 && (
        <>
          <blockquote>
            <p>
              <b>{isCorrectAnswer ? "Correct!" : "Incorrect!!"}</b>
              <br />
              <span>{!isCorrectAnswer && "The correct answer is:"}</span>
            </p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae esse sed cum dignissimos error, quam quo aliquid facere
            neque dolorem ab earum dolorum laborum ratione voluptates iusto,
            quibusdam, similique unde!
          </blockquote>
          <Button
            colorScheme="blue"
            variant="solid"
            className="next-button"
            onClick={handleNextQuestion}
          >
            Next
          </Button>
        </>
      )}
    </Container>
  );
}
