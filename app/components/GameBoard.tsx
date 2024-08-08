import React from 'react';
import LetterTile from './LetterTile';

interface GameBoardProps {
  letters: string[][];
}

export default function GameBoard({ letters }: GameBoardProps) {
  return (
    <div className="grid grid-cols-5 gap-1 p-2 bg-gray-200 rounded-lg">
      {letters.map((row, rowIndex) => (
        row.map((letter, colIndex) => (
          <LetterTile key={`${rowIndex}-${colIndex}`} letter={letter} />
        ))
      ))}
    </div>
  );
}