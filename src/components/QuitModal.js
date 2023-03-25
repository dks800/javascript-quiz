import React from "react";
import CommonModal from "./CommonModal";
import { getQuizScore } from "../common/functions";

export default function QuitModal({ primaryAction, secondaryAction, isOpen }) {
  let bodyData = `Your Score is: ${getQuizScore()} / 100`;
  let title = "Are you sure you want to quit?";
  let footerData = {
    primaryAction,
    secondaryAction,
    primaryText: "Quit!",
    secondaryText: "Go Back",
    secondaryColorScheme: "blackAlpha",
    primaryColorScheme: "red",
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
