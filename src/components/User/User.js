import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { setQuizLocalStorage } from "../../common/functions";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Avatar,
  Input,
  Button,
  useToast,
  Select,
} from "@chakra-ui/react";
import { fullQuestionsLength } from "../../common/questions";
import "./user.css";

export default function User() {
  const questionsLength = fullQuestionsLength;
  const [username, setUsername] = useState("");
  const [quizLength, setQuizLength] = useState(0);

  const getLengthOptions = (questionsLength) => {
    let divider = 1;
    let tempLengthOptions = [questionsLength];
    if (questionsLength >= 100) divider = 25;
    if (questionsLength >= 50) divider = 20;
    if (questionsLength >= 30) divider = 10;
    if (questionsLength >= 10) divider = 5;
    let tempLength = questionsLength;

    while (tempLength > divider && divider >= 5) {
      tempLengthOptions.push(tempLength - divider);
      tempLength -= divider;
    }
    return tempLengthOptions;
  };

  let lengthOptions = useMemo(
    () => getLengthOptions(questionsLength),
    [questionsLength]
  );

  const toastId = "user-toast";
  const navigation = useNavigate();
  let toast = useToast();

  const handleQuizLengthSelection = (val) => {
    setQuizLength(val);
  };

  const handleUserSubmission = () => {
    if (!username || username.length < 1 || !quizLength) {
      let description = "";
      if (!username || username.length < 1)
        description = "Please enter your name";
      if (!quizLength) description = "Please select number of questions";
      if (!toast.isActive(toastId)) {
        return toast({
          id: toastId,
          title: "Error!",
          description,
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top right",
        });
      }
    }
    setQuizLocalStorage({
      username,
      activeQuestion: 0,
      isCompleted: false,
      answers: {},
      quizLength,
      score: 0,
      lastActive: new Date().toString(),
    });
    navigation("/quiz");
  };
  return (
    <Modal isOpen isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create your profile</ModalHeader>
        <ModalBody>
          <Avatar name={username} />
          <Input
            placeholder="Enter your name"
            size="lg"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Select
            placeholder="Select number of questions"
            onChange={(e) => handleQuizLengthSelection(e.target.value)}
          >
            {lengthOptions.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleUserSubmission}>
            Start
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
