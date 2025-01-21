import React from 'react';
import { ThemeContextProvider } from './ThemeContext';
import { GameContextProvider } from "./GameContext"

function Provider({children}) {
  return (
    <ThemeContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ThemeContextProvider>
  )
}

export default Provider