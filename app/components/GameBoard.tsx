import React, { useState, useEffect } from 'react';
import LetterTile from './LetterTile';
import WordDisplay from './WordDisplay';

interface GameBoardProps {
  letters: string[][];
}

export default function GameBoard({ letters }: GameBoardProps) {
  const [selectedWord, setSelectedWord] = useState('');

  const handleLetterClick = (letter: string) => {
    setSelectedWord(prevWord => prevWord + letter);
  };

  const handleAcceptWord = () => {
    // TODO: Implement word checking logic
    console.log('Checking word:', selectedWord);
    // Clear the word after checking
    setSelectedWord('');
  };

  const handleClearWord = () => {
    setSelectedWord('');
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-1 p-2 bg-gray-200 rounded-lg">
        {letters.map((row, rowIndex) => (
          row.map((letter, colIndex) => (
            <LetterTile
              key={`${rowIndex}-${colIndex}`}
              letter={letter}
              onClick={() => handleLetterClick(letter)}
            />
          ))
        ))}
      </div>
      <WordDisplay word={selectedWord} />
      <div className="mt-4 flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={handleAcceptWord}
        >
          Accept Word
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleClearWord}
        >
          Clear
        </button>
      </div>
    </div>
  );
}