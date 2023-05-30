import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LanguageSwitcher.module.scss'

interface LanguageProps {
    className?: string
}

const LanguageSwitcher = ({ className }: LanguageProps) => {
    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <button
            onClick={changeLanguage}
            className={classNames(cls.LanguageSwitcher, {}, [className])}>
            {t('Перевод')}
        </button>
    )
}

export default LanguageSwitcher
