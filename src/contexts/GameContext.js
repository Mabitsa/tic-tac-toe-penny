import { createContext, useState } from "react";
export const GameContext = createContext({});

export const GameContextProvider = (props) => {
    const [game, setGame] = useState({
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        Playey1: {
            choice: "x",
            name: "Penny",
        },

        Playey2: {
            choice: "O",
            name: "Raen",
        },
        turn: "X",
    });

    const updateBoard = (index) => {
        let updateBoard = game.board;
        updateBoard[index] = "X";
        setGame({
            ...game,
            board: updateBoard,
            turn: game.turn === "X" ? "O" : "X,"
        });
    };

    return (

        <GameContext.Provider value={{ game, updateBoard}}>
            {props.children}
        </GameContext.Provider>
    );
};