import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface ThemeResult {
    changeTheme: () => void
    theme: Theme
}

export const useTheme = (): ThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, changeTheme}
}