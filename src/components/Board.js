import React, {useState} from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

    const [board, setBoard] = useState(Array(9).fill(''))
    const [player, setPlayer] = useState('X');
    const status = 'Next player: ' + player;
    const winner = checkWinner();

    function squareClicked(i) {
      if (board[i] !== '' || winner !== '') {
        return;
      }

      let boardClone = board.map((x) => x);
      boardClone[i] = player;
      setBoard(boardClone);

      if (player === 'X') {
        setPlayer('O');
      } else {
        setPlayer('X');
      }
    }

    function checkWinner() {
      const wins = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
      for (let i = 0; i < wins.length; i++) {
        if (board[wins[i][0]] === board[wins[i][1]] && board[wins[i][0]] === board[wins[i][2]]) {
          return board[wins[i][0]];
        }
      }
      let allFilled = true;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
          allFilled = false;
        }
      }
      if (allFilled) {
        return 'tie';
      } else {
        return '';
      }
    }

    function renderSquare(i) {
        return <Square index={i} onClick={() => squareClicked(i)} value={board[i]}/>;
    }

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{winner === 'tie'? "It's a tie." 
              : (winner !== ''? "Player " + winner + " won!": status)}
          </div>
        </div>
    )
}

export default Board;