import React, { useState, useEffect } from 'react';
import './CuartoEfecto.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);

    checkWinner(updatedBoard, currentPlayer);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkWinner = (board, player) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
      [0, 4, 8], [2, 4, 6] // Diagonal
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(player);
        break;
      }
    }

    if (board.every((cell) => cell !== null)) {
      setWinner('draw');
    }
  };

  const renderCell = (index) => {
    return (
      <div
        className={`cell ${board[index]}`}
        onClick={() => handleCellClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  useEffect(() => {
    if (winner) {
      return () => setBoard(Array(9).fill(null));
    }
  }, [winner]);

  return (
    <div className="tic-tac-toe">
      {!winner && (
        <div className="board">
          {board.map((cell, index) => renderCell(index))}
        </div>
      )}
      {winner && (
        <div className="message">
          {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
          <button onClick={resetGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
