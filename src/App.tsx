import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense, useState} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme, changeTheme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>

            <Suspense fallback={<div> loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>

            <button onClick={changeTheme}>Тема</button>
        </div>
    )
}

export default App
