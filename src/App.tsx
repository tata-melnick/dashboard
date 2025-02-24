import "./App.css"
import Layout from "./Layout"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/"  element={<MainPage />}/>
                <Route path="/search"  element={<div>Поиск</div>}/>
                <Route path="/stats"  element={<div>Статистика</div>}/>
                <Route path="/bell"  element={<div>Уведомления</div>}/>
                <Route path="/chart-pie-alt"  element={<div>Диаграмма</div>}/>
                <Route path="/like"  element={<div>Избраное</div>}/>
                <Route path="/credit-card"  element={<div>Карты</div>}/>
                <Route path="/authorization"  element={<div>Авторизация</div>}/>
            </Route>
        </Routes>
    )
}

export default App
