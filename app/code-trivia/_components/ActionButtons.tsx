"use client";
import { trivias } from "@/app/data/trivias";
import { Button } from "@chakra-ui/react";
import useActionButtonStore from "../store/useActionButtonStore";

const ActionButtons = () => {
  const {
    questionNo,
    selectedAnswer,
    isSubmitted,
    tryAgain,
    submit,
    proceedToNextQuestion,
  } = useActionButtonStore();

  const isCorrectAnswer: boolean = trivias[questionNo].answers.filter(
    ({ answer }: { answer: string }) => answer === selectedAnswer
  )[0]?.isCorrect;

  const isComplete = trivias.length === questionNo + 1;

  return (
    <>
      {isSubmitted && isComplete && isCorrectAnswer && (
        <Button colorScheme="teal" size="sm" onClick={tryAgain} mt={2}>
          Restart
        </Button>
      )}

      {isSubmitted && !isCorrectAnswer && (
        <Button colorScheme="teal" size="sm" onClick={tryAgain} mt={2}>
          Try Again
        </Button>
      )}
      {isSubmitted && isCorrectAnswer && !isComplete && (
        <Button
          colorScheme="teal"
          size="sm"
          onClick={proceedToNextQuestion}
          mt={2}
        >
          Proceed to the next Question
        </Button>
      )}
      {!isSubmitted && (
        <Button colorScheme="teal" size="sm" onClick={submit} mt={2}>
          I&apos;m sure on my answer
        </Button>
      )}
    </>
  );
};
export default ActionButtons;
