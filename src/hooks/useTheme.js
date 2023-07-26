import { useContext } from "react";
import ThemeProvider from "../context/ThemeContext";

const useTheme = () => {
    return useContext(ThemeProvider);
}

export default useTheme;