import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface ThemeResult {
    changeTheme: () => void
    theme: Theme
}

export const useTheme = (): ThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        const newTheme = theme === Theme.SECONDARY ? Theme.PRIMARY : Theme.SECONDARY
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, changeTheme }
}
