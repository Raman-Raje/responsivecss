// theme context file react
import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../config/theme'

const ThemeContext = createContext({
    theme: lightTheme, // Provide initial value
    toggleTheme: () => { }
});

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContext;