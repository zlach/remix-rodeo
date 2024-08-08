import React from 'react';

interface LetterTileProps {
  letter: string;
}

export default function LetterTile({ letter }: LetterTileProps) {
  return (
    <button className="w-12 h-12 flex items-center justify-center bg-white rounded-md shadow-md text-xl font-bold uppercase hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
      {letter}
    </button>
  );
}