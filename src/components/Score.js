import React from "react";
import { Container, Heading, Center, Button, Divider } from "@chakra-ui/react";
import {
  getQuizLocalStorage,
  resetQuizLocalStorage,
} from "../common/functions";
import { useNavigate } from "react-router";

export default function Score() {
  const localData = getQuizLocalStorage();
  const score = localData.score;
  const totalMarks = localData.totalQuestions * 2 || 20;
  const navigate = useNavigate();
  const restartQuiz = () => {
    resetQuizLocalStorage();
    navigate("/");
  };
  return (
    <Container textAlign="center">
      <Center bg="green" h="50px" color="white">
        <Heading size="md">Results</Heading>
      </Center>
      <Heading>Your score is: {`${score} / ${totalMarks}`}</Heading>
      <Divider />
      <Button onClick={restartQuiz}>Restart Quiz?</Button>
    </Container>
  );
}
