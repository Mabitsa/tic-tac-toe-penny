import { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext"; 

function GameCell({ cellItem, index }) {
  const { updateBoard } = useContext(GameContext)
  return (
    <CellStyle 
      onClick={() => {
        console.log(cellItem, index);
      }}
    >
      { cellItem }
    </CellStyle>
  )
}

export default GameCell