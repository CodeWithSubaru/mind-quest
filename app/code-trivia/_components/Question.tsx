import { Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Question = ({ children }: PropsWithChildren) => {
  return <Text fontSize="small">{children}</Text>;
};
export default Question;
