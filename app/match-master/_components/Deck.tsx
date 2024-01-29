import { Flex, Text } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import useMatchStore from "../hooks/useMatchStore";

const Deck = ({ index, children }: { index: number; children: ReactNode }) => {
  const {
    lifePoints,
    isRestart,
    cards,
    flippedCards,
    setFlippedCards,
    matchedPairsIndexes,
    setMatchedPairsIndexes,
    setLifeDeduction,
    setStatusMessage,
  } = useMatchStore();

  function handleSelectedDeck(index: number) {
    const isNoFlippedCard = flippedCards.length === 0;
    const hasFlippedCards = flippedCards.length === 1;
    const selectedDecksMatchOnCard = cards[flippedCards[0]] === cards[index];
    const isSameFlippedAndSelectedDeck = flippedCards.includes(index);
    const noLifePoints = lifePoints === 0;

    if (noLifePoints) return;

    if (isSameFlippedAndSelectedDeck) return;

    if (isNoFlippedCard) {
      setFlippedCards(index);
    } else if (hasFlippedCards && selectedDecksMatchOnCard) {
      setStatusMessage({
        message: "Great Job!",
        status: "success",
      });
      setMatchedPairsIndexes(flippedCards[0], index);
      setFlippedCards([]);
      setTimeout(() => {
        setStatusMessage({ message: "", status: undefined });
      }, 1500);
    } else if (hasFlippedCards) {
      setFlippedCards([flippedCards[0], index]);
      setLifeDeduction();
      setTimeout(() => {
        setFlippedCards([]);
      }, 700);
    }
  }

  useEffect(() => {
    if (lifePoints === 0) {
      setStatusMessage({
        message: "Sorry, Game Over!",
        status: "error",
      });
      setTimeout(() => {
        setStatusMessage({ message: "", status: undefined });
      }, 5000);
      return;
    }
  }, [lifePoints]);

  return (
    <Flex
      onClick={() => handleSelectedDeck(index)}
      className={
        " bg-gray-300 justify-center items-center text-3xl h-20 w-20 rounded-md border-4 border-gray-400 " +
        (matchedPairsIndexes.includes(index)
          ? "bg-lime-300 border-lime-500 "
          : "") +
        (flippedCards.length > 1 && flippedCards.includes(index)
          ? "bg-red-800"
          : "")
      }
    >
      {(flippedCards.includes(index) ||
        matchedPairsIndexes.includes(index)) && (
        <Text
          className={
            flippedCards.includes(index) || matchedPairsIndexes.includes(index)
              ? "opacity-1"
              : "opacity-0" + " transition-all duration-500"
          }
        >
          {children}
        </Text>
      )}
    </Flex>
  );
};
export default Deck;
