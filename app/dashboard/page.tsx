"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "./page.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Page() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerVal, setComputerVal] = useState("");

  const [score, setScore] = useState(0);

  function randomComputerVal() {
    let choice = Math.floor(Math.random() * 3);
    setComputerVal(choices[choice]);
  }

  function logic() {
    randomComputerVal();
    if (
      (playerChoice == "ROCK" && computerVal == "SCISSORS") ||
      (playerChoice == "SCISSORS" && computerVal == "PAPER") ||
      (playerChoice == "PAPER" && computerVal == "ROCK")
    ) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    if (playerChoice == "") {
      setScore(0);
    }
  }
  useEffect(() => {
    logic();
  }, [playerChoice]);

  return (
    <div className=" md:flex  p-5  ">

      <Card>
        <CardContent className="flex grid grid-row gap-9 p-5 ">
          <Button onClick={() => setPlayerChoice("SCISSORS")}>✂️</Button>
          <Button onClick={() => setPlayerChoice("ROCK")}>🪨</Button>
          <Button onClick={() => setPlayerChoice("PAPER")}>🥬</Button>
        </CardContent>
      </Card>
      <Label className=" order-last justify-center p-5">{score}</Label>

      <div>
        
      </div>

      {/* 
      <h1>{playerChoice}</h1>
      <h1>{computerVal}</h1> 
      justify-center items-center center h-screen*/}
    </div>
  );
}
