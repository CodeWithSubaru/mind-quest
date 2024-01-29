import { create } from "zustand";
import { TMessage } from "@/app/IMessage";

export type Card = string[];

interface MatchStore {
  isRestart: boolean;
  isStart: boolean;
  lifePoints: number;
  cards: Card;
  flippedCards: number[];
  matchedPairsIndexes: number[];
  statusMessage: TMessage;

  setStart: () => void;
  setStatusMessage: ({ message, status }: TMessage) => void;
  setLifeDeduction: () => void;
  setFlippedCards: (flippedCard: number[] | number) => void;
  setMatchedPairsIndexes: (flippedCard: number, secondFlipped: number) => void;
  restart: () => void;
}

function randomize() {
  const symbols: any[] = ["😘", "💕", "💖", "🔥", "⭐", "🎇", "🤔", "😁"];
  const randomizedDecks = [...symbols, ...symbols].sort(
    () => 0.3 - Math.random()
  );

  return randomizedDecks;
}

const useMatchStore = create<MatchStore>((set) => ({
  isRestart: false,
  isStart: false,
  lifePoints: 20,
  cards: [],
  flippedCards: [],
  matchedPairsIndexes: [],
  statusMessage: {
    message: "",
    status: undefined,
  },

  setStart: () =>
    set((store) => ({
      isStart: !store.isStart,
      cards: randomize(),
    })),
  setStatusMessage: ({ message, status }) =>
    set(() => ({ statusMessage: { message, status } })),
  setLifeDeduction: () =>
    set((store) => ({ lifePoints: store.lifePoints - 1 })),
  setFlippedCards: (flippedCard) =>
    set((store) => {
      if (Array.isArray(flippedCard) && flippedCard.length > 0) {
        return {
          flippedCards: [...flippedCard],
        };
      }

      if (typeof flippedCard === "number") {
        return { flippedCards: [...store.flippedCards, flippedCard] };
      }

      return { flippedCards: [] };
    }),
  setMatchedPairsIndexes: (firstFlipped, secondFlipped) =>
    set((store) => ({
      matchedPairsIndexes: [
        ...store.matchedPairsIndexes,
        firstFlipped,
        secondFlipped,
      ],
    })),

  restart: () =>
    set((store) => ({
      isRestart: !store.isRestart,
      lifePoints: 20,
      matchedPairsIndexes: [],
      flippedCards: [],
      statusMessage: { message: "", status: undefined },
      cards: randomize(),
    })),
}));

export default useMatchStore;
