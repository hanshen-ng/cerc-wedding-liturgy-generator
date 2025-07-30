import { createBrowserRouter } from "react-router";
import HomePage from './src/ui/pages/HomePage/HomePage.tsx';
import AboutPage from "./src/ui/pages/AboutPage/AboutPage.tsx";
import Layout from "./src/ui/Layout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            { path: "about", Component: AboutPage },
        ],
    },
]);
