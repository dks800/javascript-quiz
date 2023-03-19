import React, { useState } from "react";
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
} from "@chakra-ui/react";
import "./user.css";

export default function User() {
  const [username, setUsername] = useState("");
  const toastId = "user-toast";
  const navigation = useNavigate();
  let toast = useToast();

  const handleUserSubmission = () => {
    if (!username || username.length < 1) {
      if (!toast.isActive(toastId)) {
        return toast({
          id: toastId,
          title: "Error!",
          description: "Please enter your name",
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
