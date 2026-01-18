import { useState } from 'react';
import Board from '@/components/Board/Board';
import Title from '@/components/Title/Title';
import HistoryList from '@/components/HistoryList/HistoryList';
import ResetBtn from '@/components/ResetBtn/ResetBtn';

const Game = () => {
  const [gameHistory, setGameHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(1);

  let currentSquares = gameHistory[currentMove - 1];
  let xIsNext = currentMove % 2 === 0;
  let nextValue = xIsNext ? 'x' : 'o';

  function handleClick(i: number) {
    if (currentSquares[i] || isWinned()) return;
    const newSquares = currentSquares.slice();
    newSquares[i] = nextValue;
    xIsNext = !xIsNext;

    setCurrentMove(s => s + 1);
    setGameHistory(state => [...state.slice(0, currentMove), newSquares]);
  }

  function handleReturn(move: number) {
    setCurrentMove(move);
  }

  function handleReset() {
    setCurrentMove(1);

    setGameHistory(state => state.slice(0, 1));
  }

  function isWinned() {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winArr.length; i += 1) {
      const [a, b, c] = winArr[i];
      if (
        currentSquares[a] &&
        currentSquares[a] === currentSquares[b] &&
        currentSquares[a] === currentSquares[c]
      ) {
        const winnerInfo = {
          message: `Game Over! ${!xIsNext ? 'X' : 'O'} won!`,
          winnerLine: winArr[i],
        };
        return winnerInfo;
      }
    }
    return null;
  }

  return (
    <>
      <Title text={isWinned()?.message || `${nextValue} turn`} />
      <Board
        squares={currentSquares}
        onClick={handleClick}
        winnerInfo={isWinned()}
      />
      <ResetBtn handleReset={handleReset} />
      <HistoryList history={gameHistory} handleReturn={handleReturn} />
    </>
  );
};

export default Game;
