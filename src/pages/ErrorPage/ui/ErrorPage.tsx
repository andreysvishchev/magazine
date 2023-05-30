import { useTranslation } from 'react-i18next'
import classes from './ErrorPage.module.scss'

const ErrorPage = () => {
    const { t } = useTranslation()
    const reloadPage = () => {
        window.location.reload()
    }
    return (
        <div className={classes.Wrap}>
            Error reload page
            <button onClick={reloadPage}> {t('Обновить')}</button>
        </div>
    )
}

export default ErrorPage
