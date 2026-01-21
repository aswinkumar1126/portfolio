"use client";

import React,{useState ,createContext , useContext} from 'react';
import { ThemeContextType, ThemeType } from "@/frontend/types/theme/theme";

const ThemeContext  = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<ThemeType>("light");

    const toggleTheme = ()=>{
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return(
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () :ThemeContextType =>{
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context; 
}

