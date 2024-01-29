"use client";
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import useSound from "use-sound";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { notFound, useRouter } from "next/navigation";

const YELLOW_SOUND = "/sounds/yellow.wav";
const BLUE_SOUND = "/sounds/blue.wav";
const GREEN_SOUND = "/sounds/green.wav";
const RED_SOUND = "/sounds/red.wav";
const WRONG_SOUND = "/sounds/wrong.wav";

type colors = "blue" | "green" | "red" | "yellow";
const COLORS: colors[] = ["blue", "green", "red", "yellow"];

const HarmonyNostalgiaPage = () => {
  const router = useRouter();
  const underDevelopment = true;

  const [playYellowSound] = useSound(YELLOW_SOUND);
  const [playBlueSound] = useSound(BLUE_SOUND);
  const [playGreenSound] = useSound(GREEN_SOUND);
  const [playRedSound] = useSound(RED_SOUND);
  const [playWrongSound] = useSound(WRONG_SOUND);

  const blueRef = useRef(null);
  const redRef = useRef(null);
  const yellowRef = useRef(null);
  const greenRef = useRef(null);

  const [isPlaying, setPlaying] = useState(false);
  const [colorNamePatterns, setColorNamePatterns] = useState<colors[]>([]);
  const [sequence, setSequence] = useState(0);
  const [isPlayingSequence, setPlayingSequence] = useState(false);

  function playSound(name: colors) {
    if (name === "blue") playBlueSound();
    if (name === "green") playGreenSound();
    if (name === "red") playRedSound();
    if (name === "yellow") playYellowSound();
  }

  function addRandomColor() {
    const randomIndexes = Math.floor(Math.random() * 4);
    const newRandomColor = COLORS[randomIndexes];
    setColorNamePatterns([...colorNamePatterns, newRandomColor]);
  }

  function handleNextRound() {
    if (isPlaying === true) return;

    setPlaying(true);
    addRandomColor();
    playSequence();
  }

  function playSequence() {
    let colorRefBtn: MutableRefObject<HTMLElement | null>;
    setPlayingSequence(true);

    if (colorNamePatterns.length > 0) {
      if (colorNamePatterns[sequence] === "green") colorRefBtn = greenRef;
      if (colorNamePatterns[sequence] === "blue") colorRefBtn = blueRef;
      if (colorNamePatterns[sequence] === "yellow") colorRefBtn = yellowRef;
      if (colorNamePatterns[sequence] === "red") colorRefBtn = redRef;

      setTimeout(() => {
        colorRefBtn?.current?.classList.add("brightness-125");
        playSound(colorNamePatterns[sequence]);

        setTimeout(() => {
          colorRefBtn?.current?.classList.remove("brightness-125");
          if (sequence < colorNamePatterns.length - 1) {
            playSequence();
            setSequence((sequence) => sequence + 1);
          } else {
            setPlayingSequence(false);
            setSequence(0);
          }
        }, 250);
      }, 1000);
    }
  }

  function handleUserSelectedPad(selectedColorPad: colors) {
    if (isPlaying === false) return;
    if (isPlayingSequence === true) return;

    if (selectedColorPad !== colorNamePatterns[sequence]) {
      playWrongSound();
      setSequence(0);
      setColorNamePatterns([]);
      setPlaying(false);
    }

    if (selectedColorPad === colorNamePatterns[sequence]) {
      const timeOutId = setTimeout(() => {
        // increasing when correct sequence
        setSequence((sequence) => sequence + 1);

        clearTimeout(timeOutId);
        // getting delayed for the next round when last item is correct
        if (
          selectedColorPad === colorNamePatterns[colorNamePatterns.length - 1]
        ) {
          const timeOutId = setTimeout(() => {
            setSequence(0);
            addRandomColor();
            clearTimeout(timeOutId);
          }, 300);
        }
      }, 300);
    }
  }

  useEffect(() => {
    playSequence();
  }, [playSequence]);

  const Pads: {
    id: number;
    name: colors;
    ref: MutableRefObject<null>;
    className: string;
  }[] = [
    {
      id: 1,
      name: "blue",
      ref: blueRef,
      className: "bg-blue-500 rounded-[400px_15px_15px_15px]",
    },
    {
      id: 2,
      name: "green",
      ref: greenRef,
      className: "bg-green-500 rounded-[15px_400px_15px_15px]",
    },
    {
      id: 3,
      name: "red",
      ref: redRef,
      className: "bg-red-500 rounded-[15px_15px_15px_400px]",
    },

    {
      id: 4,
      name: "yellow",
      ref: yellowRef,
      className: "bg-yellow-500 rounded-[15px_15px_400px_15px]",
    },
  ];

  if (underDevelopment) {
    return (
      <Box className="h-full grid place-items-center">
        <Box className="text-center">
          <h1 className="text-2xl leading-relaxed max-w-sm mb-4">
            Sorry, but this page is not available yet. Unfortunately, it&apos;s
            under development.
          </h1>
          <Button
            onClick={() => router.back()}
            className="!text-sm !font-medium"
          >
            Go Back
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box className="h-full">
      <Flex align="flex-end" pt="20" mb={5}>
        <Heading as="h1">Harmony Nostalgia </Heading>
      </Flex>

      <Center>
        <Box className="relative grid grid-cols-2 h-80 w-80 overflow-hidden rounded-full bg-black p-3 gap-2">
          {Pads.map(({ id, name, className, ref }, index) => (
            <Box
              key={id}
              className={className}
              ref={ref}
              onClick={() => handleUserSelectedPad(name)}
            />
          ))}

          <Box
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
            onClick={() => handleNextRound()}
          >
            <Box className="h-24 w-24 font-bold bg-white rounded-full flex justify-center items-center border-black border-1 border-8">
              {!isPlaying ? "Start" : `Turns: ${sequence}`}
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
export default HarmonyNostalgiaPage;
