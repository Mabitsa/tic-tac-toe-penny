import React from 'react';
import { ThemeContextProvider } from './ThemeContext';
import { GameContextProvider } from "./GameContext"

function Provider({children}) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  )
}

export default Provider