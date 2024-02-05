import './App.css'
import Home from "./screens/Home.tsx";
import Setting from "./screens/Setting.tsx";
import Menu from "./components/Menu.tsx";
import {useRouterStore, useThemeStore} from "./store";

function App() {
    const {themes, version, defaultTheme, changeTheme} = useThemeStore((state) => state)
    const {defaultRouter} = useRouterStore((state) => state)
    const switchRoutes = (id: string) => {
        if (id === "home") return <Home/>
        if (id === "setting") return <Setting/>
    }

    return (
        <div style={{background: defaultTheme === "dark" ? "#000": "#fff"}}>
            <div>
                <section style={{border: "1px solid #000", padding: 10}}>
                    {switchRoutes(defaultRouter)}
                </section>
            </div>
            <footer>
                <button onClick={() => changeTheme(defaultTheme  === "light" ? "dark" : "light")}>
                    Theme {defaultTheme} {version}
                </button>
                <Menu/>
            </footer>
        </div>
    )
}

export default App
