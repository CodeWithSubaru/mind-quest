"use client";
import { Box } from "@chakra-ui/react";
import useActionButtonStore from "../store/useActionButtonStore";
import { trivias } from "@/app/data/trivias";
import { PropsWithChildren } from "react";

const Background = ({ children }: PropsWithChildren) => {
  const { isSubmitted, questionNo, selectedAnswer } = useActionButtonStore();
  const isComplete = trivias.length === questionNo + 1;
  const isCorrectAnswer: boolean = trivias[questionNo].answers.filter(
    ({ answer }: { answer: string }) => answer === selectedAnswer
  )[0]?.isCorrect;

  return (
    <Box
      background={
        isSubmitted && isComplete && isCorrectAnswer
          ? "url(/static/confetti.gif)"
          : ""
      }
    >
      {children}
    </Box>
  );
};
export default Background;
