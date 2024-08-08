import { useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import GameBoard from '../components/GameBoard';

export const meta: MetaFunction = () => {
  return [
    { title: 'Boggle Game' },
    { name: 'description', content: 'Play Boggle online!' },
  ];
};

export default function BoggleGame() {

  useEffect(() => {

  }, []);

  return (
    <div className="boggle-game">
      <h1>Boggle Game</h1>
      <GameBoard />
    </div>
  );
}