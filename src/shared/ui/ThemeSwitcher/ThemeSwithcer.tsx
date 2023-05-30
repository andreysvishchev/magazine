import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import Button from '../Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwithcerProps {
    className?: string
}

const ThemeSwithcer = ({ className }: ThemeSwithcerProps) => {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={classNames(cls.ThemeSwithcer, {}, [className])}>
            <Button onClick={changeTheme}>{theme === 'primary' ? 'Светлая' : 'Темная'}</Button>
        </div>
    )
}

export default ThemeSwithcer
