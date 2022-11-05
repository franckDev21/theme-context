import React, { createContext } from "react";
import { ThemeContextProps } from "./type";

export default createContext<ThemeContextProps>({
  theme : '',
  updateTheme : (name) => {}
})