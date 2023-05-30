import { useTheme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar/Navbar'
import { Sidebar } from 'widgets/Sidebar/Sidebar'
import { AppRouter } from './providers/Router'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='page-wrapper'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
