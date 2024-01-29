"use client";
import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import { TMessage } from "../IMessage";

const AlertMessage = ({ message }: { message: TMessage }) => {
  return (
    message.message && (
      <Box className="fixed bottom-0 left-0 right-0 max-w-4xl mx-auto -translate-y-full">
        <Alert status={message.status} className="rounded-md">
          <AlertIcon />
          {message.message}
        </Alert>
      </Box>
    )
  );
};
export default AlertMessage;
