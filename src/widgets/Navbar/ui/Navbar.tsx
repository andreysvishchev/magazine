import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import Container from 'shared/ui/Container/Container'
import LanguageSwitcher from 'shared/ui/LanguageSwitcher/LanguageSwitcher'
import ThemeSwithcer from 'shared/ui/ThemeSwitcher/ThemeSwithcer'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Container>
                <div className={cls.Inner}>
                    <ThemeSwithcer />
                    <LanguageSwitcher />
                    <div className={cls.Links}>
                        <AppLink
                            className={cls.Link}
                            theme={AppLinkTheme.PRIMARY}
                            to='/'>
                            {t('Главная')}
                        </AppLink>
                        <AppLink
                            className={cls.Link}
                            theme={AppLinkTheme.PRIMARY}
                            to='/about'>
                            {t('О сайте')}
                        </AppLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
