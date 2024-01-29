"use client";
import { Box, Button, Center, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import Deck from "./_components/Deck";
import Header from "./_components/Header";
import useMatchStore from "./hooks/useMatchStore";
import AlertMessage from "../components/AlertMessage";

const MatchMasterPage = () => {
  const {
    isStart,
    setStart,
    cards,
    statusMessage,
    restart,
    lifePoints,
    matchedPairsIndexes,
  } = useMatchStore();

  const noLifePoints = lifePoints === 0;

  return (
    <Box>
      <Header />
      <Center>
        {!isStart && (
          <Button colorScheme="teal" size="sm" onClick={setStart} mt={2}>
            Start
          </Button>
        )}
        {isStart && (
          <Grid gap={2} className="grid-cols-4 grid-rows-4">
            {cards.map((card, index) => (
              <Deck key={index} index={index}>
                {card}
              </Deck>
            ))}
            {(noLifePoints || matchedPairsIndexes.length === cards.length) && (
              <Button colorScheme="teal" size="sm" onClick={restart} mt={2}>
                Restart
              </Button>
            )}
          </Grid>
        )}
        <AlertMessage message={statusMessage} />
      </Center>
    </Box>
  );
};
export default MatchMasterPage;
