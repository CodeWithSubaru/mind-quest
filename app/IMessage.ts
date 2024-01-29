export type AlertStatus =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "loading"
  | undefined;

export type TMessage = {
  message: string;
  status: AlertStatus;
};

export interface IMessage {
  COMPLETE: TMessage;
  CORRECT: TMessage;
  INCORRECT: TMessage;
  DEFAULT: TMessage;
}
