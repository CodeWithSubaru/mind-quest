import { Flex, Heading, Text } from "@chakra-ui/react";
import useMatchStore from "../hooks/useMatchStore";

const Header = () => {
  const { lifePoints } = useMatchStore();
  return (
    <Flex align="flex-end" justify="space-between" pt="20" mb={10}>
      <Heading as="h1">Match Master </Heading>
      <Text as="strong" fontSize="large">
        💖 {lifePoints}
      </Text>
    </Flex>
  );
};
export default Header;
