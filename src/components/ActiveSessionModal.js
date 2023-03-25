import React from "react";
import CommonModal from "./CommonModal";
import { getQuizScore } from "../common/functions";

export default function ActiveSessionModal({
  isOpen,
  primaryAction,
  secondaryAction,
}) {
  let bodyData = `Do you want to Continue or Restart?\n
                    Your Score is: ${getQuizScore()} / 100\n
                    You have ${20} more question to ateemp.`;
  let title = "You have an active session!";
  let footerData = {
    primaryAction,
    secondaryAction,
    primaryText: "Continue",
    secondaryText: "Restart",
    secondaryColorScheme: "blue",
    primaryColorScheme: "green",
  };
  return (
    <CommonModal
      isOpen={isOpen}
      title={title}
      bodyData={bodyData}
      footerData={footerData}
    />
  );
}
