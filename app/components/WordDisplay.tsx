import React from 'react';

interface WordDisplayProps {
  word: string;
}

export default function WordDisplay({ word }: WordDisplayProps) {
  return (
    <div className="mt-4 p-2 bg-blue-100 rounded-lg text-center">
      <span className="text-2xl font-bold">{word}</span>
    </div>
  );
}
