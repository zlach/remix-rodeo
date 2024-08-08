<<<<<<< Updated upstream
import { useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import GameBoard from '../components/GameBoard';
=======
import GameBoard from "../components/GameBoard";
import { json, MetaFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { dbConnect } from "db.server";
>>>>>>> Stashed changes

export const meta: MetaFunction = () => {
  return [
    { title: "Boggle Game" },
    { name: "description", content: "Play Boggle online!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const db = await dbConnect();

  const users = await db.all("SELECT * FROM users");
  await db.close();
  return json({ users });
};

export default function BoggleGame() {
<<<<<<< Updated upstream

  useEffect(() => {

  }, []);

=======
>>>>>>> Stashed changes
  return (
    <div className="boggle-game">
      <h1>Boggle Game</h1>
      <GameBoard />
<<<<<<< Updated upstream
=======
      {/* TODO: Add more game components (timer, score, input, etc.) */}
>>>>>>> Stashed changes
    </div>
  );
}
