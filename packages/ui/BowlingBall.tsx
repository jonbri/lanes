import * as React from "react";
import { useEffect, useState, forwardRef } from "react";

const roundTo = (n: number, factor: number) => Math.ceil(n / factor) * factor;
const roundTo20 = (n: number) => roundTo(n, 20);
const randomNumberBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const occasionallyByFactor = (factor: number) =>
  randomNumberBetween(0, factor) === factor;

export interface BowlingBallProps {
  index?: number;
  jump?: boolean;
  onJump?: (newHeight: number) => void;
  initiallyRandom?: boolean;
  rate?: number;
  defaultHeight?: number;
  width?: string;
  minHeight?: number;
  maxHeight?: number;
  occasionalityFactor?: number;
}
export const BowlingBall = forwardRef<HTMLDivElement, BowlingBallProps>(
  (
    {
      index = 0,
      jump = true,
      initiallyRandom = false,
      onJump,
      rate = 2000,
      defaultHeight = 50,
      width = "100px",
      minHeight = 30,
      maxHeight = 120,
      occasionalityFactor = 3,
    }: BowlingBallProps,
    ref
  ) => {
    const getRandomHeight = () =>
      roundTo20(randomNumberBetween(minHeight, maxHeight));
    const occasionally = () => occasionallyByFactor(occasionalityFactor);
    const [height, setHeight] = useState(
      initiallyRandom ? getRandomHeight() : defaultHeight
    );

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (jump && occasionally()) {
          const newHeight = getRandomHeight();
          setHeight(newHeight);
          onJump?.(newHeight);
        }
      }, rate);
      return () => clearInterval(intervalId);
    }, []);

    return (
      <div
        ref={ref}
        style={{
          height: `${height}px`,
          width,
          backgroundColor: index % 2 === 0 ? "tan" : "lightgreen",
          borderRadius: "50%",
          textAlign: "center" as const,
        }}
      >
        <strong>{index}</strong>
        <br />
        <span>{height}</span>
      </div>
    );
  }
);
