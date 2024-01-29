import { Radio, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

const Answer = ({
  value,
  isSubmitted,
  rightAnswer,
  children,
}: {
  value: string;
  isSubmitted: boolean;
  rightAnswer: boolean;
  children: ReactNode;
}) => {
  console.log("ANSWER");
  const correctAnswerClass = isSubmitted && rightAnswer ? "bg-teal-500" : "";

  return (
    <Stack
      borderWidth="1px"
      borderColor="blue.500"
      py={2}
      px={4}
      className={
        correctAnswerClass +
        " has-[:checked]:bg-gray-200 has-[:checked]:scale-105 has-[:checked]:dark:text-gray-800 has-[:checked]:font-bold transition-all duration-300 disabled:bg-gray-500 rounded-md overflow-hidden"
      }
    >
      <Radio value={value} size="sm" fontSize="small" isDisabled={isSubmitted}>
        {children}
      </Radio>
    </Stack>
  );
};
export default Answer;
