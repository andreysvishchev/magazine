import { type FC, type PropsWithChildren } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Container.module.scss'

interface ContainerProps {
    className?: string
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ className, children }) => (
    <div className={classNames(cls.Container, {}, [className])}>{children}</div>
)

export default Container
