import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [turn, setTurn] = useState(0);
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const handleClick = (index: number) => {
    if (boxes[index] || isWinner()) return;
    const newBoxes = boxes.slice();
    newBoxes[index] = turn % 2 === 0 ? "o" : "x";
    setTurn(turn + 1);
    setBoxes(newBoxes);
  };

  const isWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        return boxes[a];
      }
    }
    return null;
  };

  const winner = isWinner();
  const nextPlayer = turn % 2 === 0 ? "O" : "X";

  return (
    <div className="App" data-testid="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <h3>
        {winner ? `Player ${winner} Wins!` : `Player ${nextPlayer}'s Turn`}
      </h3>
      <div className="grid">
        {boxes.map((box, index) => (
          <div key={index} onClick={() => handleClick(index)} className={box}>
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
