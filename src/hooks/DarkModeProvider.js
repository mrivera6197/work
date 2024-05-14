import React, { createContext, useContext, useState } from 'react';


const DarkModeContext = createContext();

export const useDarkModeContext = () => useContext(DarkModeContext); 

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
