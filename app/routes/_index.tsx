import { useState, useEffect } from 'react';
import type { V2_MetaFunction } from '@remix-run/node';
import GameBoard from '../components/GameBoard';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Boggle Game' },
    { name: 'description', content: 'Play Boggle online!' },
  ];
};

export default function BoggleGame() {
  const [letters, setLetters] = useState<string[][]>([]);

  useEffect(() => {
    // TODO: Implement function to generate random letters
    const generateRandomLetters = (): string[][] => {
      // Placeholder: returns a 5x5 grid of random letters
      return Array(5)
        .fill(null)
        .map(() =>
          Array(5)
            .fill(null)
            .map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26)))
        );
    };

    setLetters(generateRandomLetters());
  }, []);

  return (
    <div className="boggle-game">
      <h1>Boggle Game</h1>
      <GameBoard letters={letters} />
      {/* TODO: Add more game components (timer, score, input, etc.) */}
    </div>
  );
}