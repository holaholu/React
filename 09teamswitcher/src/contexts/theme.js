//Easier way to create a context all in one file

import { createContext, useContext } from "react";

export const ThemeContext = createContext({  //1. create the context
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});


export default function useTheme() {             //2. Method to Use the context created
  return useContext(ThemeContext);
}

export const ThemeProvider = ThemeContext.Provider; //3. Create and export the context provider

