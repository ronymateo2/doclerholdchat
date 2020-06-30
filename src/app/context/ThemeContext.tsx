import React, { useState } from 'react';
import { InterfaceType } from '../model/interface-type';

export interface ThemeContextProps {
    theme: InterfaceType
    updateTheme: (val: InterfaceType) => void
}

export const useTheme = (startingTheme: InterfaceType = InterfaceType.Ligth) => {
    const [theme, setTheme] = useState<InterfaceType>(startingTheme);
    return {
        theme,
        updateTheme(val: InterfaceType) {
            setTheme(val)
        }
    };
};

export const ThemeContext = React.createContext<Partial<ThemeContextProps>>({});


export interface ThemeProviderProps {
    children: React.ReactNode
    startingTheme: InterfaceType
}

export const ThemeProvider = ({ children, startingTheme }: ThemeProviderProps) => {
    const state = useTheme(startingTheme);
    return (
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
};