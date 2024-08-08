import { useState, useEffect } from 'react';
import LetterTile from './LetterTile';
import WordDisplay from './WordDisplay';
import { generateLetterGrid } from '../utils/letterGenerator';


export default function GameBoard() {
  const [letters, setLetters] = useState<string[][]>([]);
  const [selectedWord, setSelectedWord] = useState('');
  const [acceptedWords, setAcceptedWords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLetters(generateLetterGrid(5, 5));
  }, []);

  const handleLetterClick = (letter: string) => {
    setSelectedWord(prevWord => prevWord + letter);
  };

  const handleAcceptWord = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord.toLowerCase()}`);
      const data = await response.json();
      
      if (Array.isArray(data) && data.length > 0) {
        // Word is valid
        setAcceptedWords(prevWords => [...prevWords, selectedWord]);
        setSelectedWord('');
      } else if (data.title === "No Definitions Found") {
        // Word is not valid
        alert('Not a valid word!');
      } else {
        // Unexpected response
        throw new Error('Unexpected API response');
      }
    } catch (error) {
      console.error('Error validating word:', error);
      alert('Error checking word. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
          disabled={isLoading || selectedWord.length === 0}
        >
          {isLoading ? 'Checking...' : 'Accept Word'}
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleClearWord}
        >
          Clear
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Accepted Words:</h3>
        <ul className="list-disc list-inside">
          {acceptedWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}