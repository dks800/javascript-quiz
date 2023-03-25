import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  Avatar,
  Heading,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { getQuizLocalStorage } from "../common/functions";

export default function CommonModal({ iOpen, title, bodyData, footerData }) {
  let localData = getQuizLocalStorage();
  return (
    <Modal isOpen isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Avatar name={localData.username} />
          <Heading size="md">
            <p>{bodyData}</p>
          </Heading>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme={footerData.secondaryColorScheme}
            variant="outline"
            mr={3}
            onClick={footerData.secondaryAction}
          >
            {footerData.secondaryText}
          </Button>
          <Button
            colorScheme={footerData.primaryColorScheme}
            variant="solid"
            mr={3}
            onClick={footerData.primaryAction}
          >
            {footerData.primaryText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
