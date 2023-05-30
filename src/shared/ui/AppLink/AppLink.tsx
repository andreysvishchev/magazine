import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    to,
    ...rest
}) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
        {children}
    </Link>
)

export default AppLink
