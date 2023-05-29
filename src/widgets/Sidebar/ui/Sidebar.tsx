import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [colapsed, setColapsed] = useState(true)
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Sidebar, { [cls.Colapsed]: colapsed }, [className])}>
            <button
                className={cls.Button}
                onClick={() => {
                    setColapsed(!colapsed)
                }}>
                {t('Перевод')}
            </button>
        </div>
    )
}

export default Sidebar
