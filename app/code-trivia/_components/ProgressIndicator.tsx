"use client";
import { trivias } from "@/app/data/trivias";
import {
  Stack,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepSeparator,
  useSteps,
  Text,
} from "@chakra-ui/react";
import useActionButtonStore from "../store/useActionButtonStore";

const ProgressIndicator = () => {
  const { questionNo, selectedAnswer, isSubmitted } = useActionButtonStore();
  const isCorrectAnswer: boolean = trivias[questionNo].answers.filter(
    ({ answer }: { answer: string }) => answer === selectedAnswer
  )[0]?.isCorrect;

  const isComplete = trivias.length === questionNo + 1;

  return (
    <Stack className="mb-4">
      <Stepper
        size="sm"
        index={
          isSubmitted && isComplete && isCorrectAnswer
            ? questionNo + 1
            : questionNo
        }
        gap="0"
      >
        {trivias.map((step, index) => (
          <Step key={index} className="!gap-0">
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator className="!ml-0" />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
export default ProgressIndicator;
