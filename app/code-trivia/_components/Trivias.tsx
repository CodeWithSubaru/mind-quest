"use client";
import {
  Box,
  HStack,
  Heading,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import useActionButtonStore from "../store/useActionButtonStore";
import Answer from "./Answer";
import Question from "./Question";
import { trivias } from "@/app/data/trivias";
import { memo } from "react";
import AlertMessage from "@/app/components/AlertMessage";
import ActionButtons from "./ActionButtons";

const Trivias = () => {
  const {
    statusMessage,
    questionNo,
    selectedAnswer,
    setSelectedAnswer,
    isSubmitted,
  } = useActionButtonStore();
  const trivia = trivias[questionNo];
  const rightAnswer = trivia.answers.filter((answer) => answer.isCorrect)[0];

  return (
    <Box key={trivia.id}>
      <HStack justify="space-between" align="center" mb={2}>
        <Heading as="h5" size="sm">
          Question # {questionNo + 1}
        </Heading>
        <Text fontSize="small">
          {questionNo + 1} <Text as="strong"> / {trivias.length}</Text>
        </Text>
      </HStack>
      <Question>{trivia.question}</Question>
      <RadioGroup value={selectedAnswer} onChange={setSelectedAnswer}>
        <Stack spacing={2} p={2}>
          {rightAnswer &&
            trivia.answers.map(({ id, answer }) => (
              <Answer
                isSubmitted={isSubmitted}
                rightAnswer={rightAnswer.answer === answer}
                value={answer}
                key={id}
              >
                {answer}
              </Answer>
            ))}
        </Stack>
      </RadioGroup>
      <ActionButtons />
      <AlertMessage message={statusMessage} />
    </Box>
  );
};
export default memo(Trivias);
