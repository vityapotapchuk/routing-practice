import { create } from 'zustand'

const useThemeStore = create((set) => ({
    themes: [
        {name: "Light", id: "light"},
        {name: "Dark", id: "dark"},
    ],
    version: "1.0",
    defaultTheme: "dark",
    changeTheme: (id: string) => set((state) => ({defaultTheme: id}))
}))


const useRouterStore = create((set) => ({
    routes: [
        {menu: "Home", id: "home"},
        {menu: "Setting", id: "setting"}
    ],
    defaultRouter: "home",
    setRouter: (id: string) => set((state) => ({defaultRouter: id}))
}))

export {
    useRouterStore,
    useThemeStore
}