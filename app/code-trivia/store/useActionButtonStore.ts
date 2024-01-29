import { trivias } from "@/app/data/trivias";
import { IMessage, TMessage } from "@/app/IMessage";
import { create } from "zustand";

const MESSAGE: IMessage = {
  COMPLETE: {
    message: "Well done! You complete the challenge!",
    status: "success",
  },
  CORRECT: { message: "Wow! Great job", status: "success" },
  INCORRECT: { message: "Sorry you answer was incorrect :(", status: "error" },
  DEFAULT: { message: "", status: undefined },
};

interface ActionButtonsStore {
  questionNo: number;
  statusMessage: TMessage;
  selectedAnswer: string;
  isSubmitted: boolean;

  setSelectedAnswer: (selectedAnswer: string) => void;
  setSubmitted: () => void;
  tryAgain: () => void;
  proceedToNextQuestion: () => void;
  submit: () => void;
}

const useActionButtonStore = create<ActionButtonsStore>((set) => ({
  questionNo: 0,
  statusMessage: { message: "", status: undefined },
  selectedAnswer: "",
  isSubmitted: false,

  setSelectedAnswer: (selectedAnswer) => set({ selectedAnswer }),
  setSubmitted: () => set((state) => ({ isSubmitted: !state.isSubmitted })),
  tryAgain: () =>
    set((store) => {
      return {
        selectedAnswer: "",
        questionNo: 0,
        statusMessage: { message: "", status: undefined },
        isSubmitted: !store.isSubmitted,
      };
    }),
  proceedToNextQuestion: () =>
    set((store) => ({
      selectedAnswer: "",
      questionNo: store.questionNo + 1,
      statusMessage: {
        message: MESSAGE.DEFAULT.message,
        status: MESSAGE.DEFAULT.status,
      },
      isSubmitted: !store.isSubmitted,
    })),

  submit: () =>
    set((store) => {
      if (!store.selectedAnswer) return {};

      let message = "";
      let status = undefined;
      const isCorrectAnswer = trivias[store.questionNo].answers.filter(
        ({ answer }) => answer === store.selectedAnswer
      )[0].isCorrect;

      const isComplete = trivias.length === store.questionNo + 1;

      if (isCorrectAnswer && isComplete) {
        message = MESSAGE.COMPLETE.message;
        status = MESSAGE.COMPLETE.status;
      }

      if (isCorrectAnswer && !isComplete) {
        message = MESSAGE.CORRECT.message;
        status = MESSAGE.CORRECT.status;
      }

      if (!isCorrectAnswer) {
        message = MESSAGE.INCORRECT.message;
        status = MESSAGE.INCORRECT.status;
      }

      return {
        statusMessage: { message, status },
        isSubmitted: !store.isSubmitted,
      };
    }),
}));

export const useActionButtonSelector = useActionButtonStore;

export default useActionButtonStore;
