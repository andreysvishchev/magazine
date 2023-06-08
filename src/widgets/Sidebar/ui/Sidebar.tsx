import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)
    const { t } = useTranslation()
    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.Collapsed]: !collapsed }, [className])}>
            <button
                data-testid='sidebar-toggle'
                className={cls.Button}
                onClick={() => {
                    setCollapsed(!collapsed)
                }}>
                {t('Перевод')}
            </button>
        </div>
    )
}

export default Sidebar
