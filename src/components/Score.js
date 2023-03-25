import React from "react";
import {
  Container,
  Heading,
  Center,
  Button,
  Divider,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { resetQuizLocalStorage, getQuizScore } from "../common/functions";
import { useNavigate } from "react-router";

export default function Score() {
  const navigate = useNavigate();
  const restartQuiz = () => {
    resetQuizLocalStorage();
    navigate("/");
  };
  const getScoreTitle = (score) => {
    if (score >= 0 && score <= 40)
      return "Tighten you belt, pull your sleeves. You need to learn more!";
    if (score > 40 && score <= 65)
      return "You fella! did a good job, just need to clear some more concepts!";
    if (score > 65 && score <= 85)
      return "Wuhu!! Splendid, attempt again to be the KING!";
    if (score > 85 && score <= 100) return "Amazing! You owe a party!";
    return "Unable to display your score. Kindly restart quiz.";
  };
  const getScoreColor = (score) => {
    if (score >= 0 && score <= 40) return "red";
    if (score > 40 && score <= 65) return "yellow";
    if (score > 65 && score <= 85) return "orange";
    if (score > 85 && score <= 100) return "green";
    return "green";
  };
  const score = getQuizScore();

  return (
    <Container textAlign="center" className="score">
      <Center bg={getScoreColor(score)} h="50px" color="black">
        <Heading size="md">{getScoreTitle(score)}</Heading>
      </Center>
      <CircularProgress value={score} color={getScoreColor(score)} size="4em">
        <CircularProgressLabel>{score}%</CircularProgressLabel>
      </CircularProgress>
      <Divider />
      <Button onClick={restartQuiz} colorScheme="blue" variant="solid">
        Restart Quiz
      </Button>
    </Container>
  );
}
