"use client"

import { ThemeContextProvider } from "@/hooks/useTheme";

interface ThemeProviderProps{
  children: React.ReactNode;

}
const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) => {
  return ( <ThemeContextProvider>
    {children}
  </ThemeContextProvider> );
}
 
export default ThemeProvider;