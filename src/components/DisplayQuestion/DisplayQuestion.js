import React, { useState } from "react";
import {
  getQuizLocalStorage,
  setQuizLocalStorage,
} from "../../common/functions";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function DisplayQuestion(props) {
  const question = props.data;
  const localData = getQuizLocalStorage();
  const [userSelection, setUserSelection] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const correctAnswer = question.answer;

  const clickHandler = (selected) => {
    const isCorrect = compare(selected, correctAnswer);

    if (userSelection > 0) return false;
    if (isCorrect) setIsCorrectAnswer(true);
    let score = isCorrect ? parseInt(localData.score) + 10 : localData.score;

    setQuizLocalStorage({
      answers: {
        ...localData.answers,
        [props.activeQuestion]: isCorrect,
      },
      score,
    });
    setUserSelection(selected);
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

  const handleNextQuestion = () => {
    setUserSelection(0);
    setIsCorrectAnswer(false);
    props.showNextQuestion();
  };
  return (
    <div className="display-question">
      <div>{`${props.activeQuestion + 1}. ${question.text}`}</div>
      <pre>
        <code className="hljs language-javascript question">
          {question.codeText}
        </code>
      </pre>
      <ButtonGroup className="questions" size="sm">
        {question.options.map((option) => {
          return (
            <Button
              key={option.id}
              colorScheme={getColorScheme(option.id)}
              variant={getVariant(option.id)}
              onClick={() => clickHandler(option.id)}
            >
              {option.text}
            </Button>
          );
        })}
      </ButtonGroup>
      {userSelection > 0 && (
        <>
          <blockquote>
            <p>
              <b>{isCorrectAnswer ? "Correct!" : "Incorrect!!"}</b>
              <br />
              <span>
                {!isCorrectAnswer && "The correct answer is: "}
                <b>{question.options[correctAnswer - 1].text}</b>
              </span>
            </p>
            {question.answerDescription}
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
    </div>
  );
}
