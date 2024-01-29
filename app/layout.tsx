import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Link from "next/link";
import { Box, Container, Flex } from "@chakra-ui/react";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mind Games",
  description: "Different variants of games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <Container className="relative" maxW="container.lg" height={"100vh"}>
            <Box
              className="absolute top-0 left-0 w-full px-3 py-5 flex flex-wrap gap-3"
              textColor="gray.200"
            >
              <Link
                className="text-xs px-2 py-1 rounded-full border-2 border-indigo-300"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-xs px-2 py-1 rounded-full border-2 border-indigo-300"
                href="/code-trivia"
              >
                Code Trivia
              </Link>
              <Link
                className="text-xs px-2 py-1 rounded-full border-2 border-indigo-300"
                href="/match-master"
              >
                Match Master
              </Link>
              <Link
                className="text-xs px-2 py-1 rounded-full border-2 border-indigo-300"
                href="/harmony-nostalgia"
              >
                Harmony Nostalgia
              </Link>
            </Box>
            <Flex
              direction="column"
              justify="space-between"
              height="100%"
              className="overflow-hidden px-10"
            >
              {children}
            </Flex>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
