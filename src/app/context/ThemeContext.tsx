"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = 'themeContext';

type ThemeContext = {
    theme: string;
    ChangeTema: () => void;
}
type Props = {
    children: ReactNode;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);


export const ThemeProvider = ({ children }: Props) => {

    
    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        const tema = localStorage.getItem(STORAGE_KEY)
        if(tema){setTheme(tema);}
    }, [])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark'); 
        }
        
    }, [theme])

    const ChangeTema =()=>{
        if(theme === 'light'){
            setTheme('dark');
            localStorage.setItem(STORAGE_KEY, 'dark')
            
        }else{
            setTheme('light');
            localStorage.setItem(STORAGE_KEY, 'light')
        }
    }
    return (
        <ThemeContext.Provider value={{theme, ChangeTema}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=> useContext(ThemeContext)