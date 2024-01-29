import { Box, Flex, Heading } from "@chakra-ui/react";
import Background from "./_components/Background";
import ProgressIndicator from "./_components/ProgressIndicator";
import Trivias from "./_components/Trivias";

const CodeTriviaPage = () => {
  return (
    <Background>
      <Box>
        <Flex align="flex-end" pt="20" mb={5}>
          <Heading as="h1">Code Trivia </Heading>
        </Flex>
        <ProgressIndicator />
        <Trivias />
      </Box>
    </Background>
  );
};
export default CodeTriviaPage;
