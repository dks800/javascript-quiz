import jslogo from "../img/js-logo.jpg";
import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  Button,
} from "@chakra-ui/react";
import QuitModal from "./QuitModal";
import ActiveSessionModal from "./ActiveSessionModal";
import {
  getQuizLocalStorage,
  resetQuizLocalStorage,
  setQuizLocalStorage,
} from "../common/functions";
import { getQuestions } from "../common/questions";
import { useNavigate } from "react-router";
import DisplayQuestion from "./DisplayQuestion/DisplayQuestion";

export default function QuizPage() {
  const navigate = useNavigate();
  const localData = getQuizLocalStorage();
  const [activeQuestion, setActiveQuestion] = useState(
    localData.activeQuestion
  );
  const [quitModalVisible, setQuitModalVisible] = useState(false);
  const [sessionActive, setSessionActive] = useState(!localData.isCompleted);
  const questions = useMemo(
    () => getQuestions(localData.quizLength),
    [localData.quizLength]
  );

  useEffect(() => {
    window.hljs.highlightElement(document.querySelector("pre code"));
  }, [activeQuestion]);

  const showNextQuestion = () => {
    let activeQuestion = localData.activeQuestion;
    if (activeQuestion >= localData.quizLength - 1) {
      setQuizLocalStorage({
        isCompleted: true,
        activeQuestion: activeQuestion + 1,
        lastActive: new Date().toString(),
      });
      navigate("/score");
    }
    setQuizLocalStorage({
      activeQuestion: activeQuestion + 1,
    });
    setActiveQuestion(activeQuestion + 1);
  };

  const handleTerminateQuiz = () => {
    setQuizLocalStorage({
      isCompleted: true,
      activeQuestion: activeQuestion + 1,
    });
    navigate("/score");
    handleModalClose();
  };

  const handleModalOpen = () => {
    setQuitModalVisible(true);
  };

  const handleModalClose = () => {
    setQuitModalVisible(false);
  };

  const handleSessionModalClose = () => {
    setSessionActive(false);
  };

  const restartQuiz = () => {
    resetQuizLocalStorage();
    navigate("/");
  };

  const getSessionDifference = () => {
    let prevSession = new Date(localData.lastActive);
    let current = new Date();
    let diff = current - prevSession;
    let minutes = diff / 1000 / 60;
    return minutes;
  };

  const sessionDiff = getSessionDifference();

  return (
    <>
      <Button
        variant="solid"
        colorScheme="red"
        className="quit-quiz"
        onClick={handleModalOpen}
      >
        Quit?
      </Button>
      <Container>
        <Progress
          hasStripe
          value={((activeQuestion + 1) / localData.quizLength) * 100}
          size="sm"
          colorScheme="whatsapp"
        />
        <div className="title">
          <img src={jslogo} alt="JS Logo" className="js-logo" loading="lazy" />
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
      {quitModalVisible && (
        <QuitModal
          isOpen={quitModalVisible}
          primaryAction={handleTerminateQuiz}
          secondaryAction={handleModalClose}
        />
      )}
      {sessionDiff > 1.5 && sessionActive && localData.activeQuestion > 0 && (
        <ActiveSessionModal
          isOpen={sessionActive}
          primaryAction={handleSessionModalClose}
          secondaryAction={restartQuiz}
        />
      )}
    </>
  );
}
