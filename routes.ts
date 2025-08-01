import { createBrowserRouter } from "react-router";
import HomePage from './src/ui/pages/HomePage/HomePage.tsx';
import AboutPage from "./src/ui/pages/AboutPage/AboutPage.tsx";
import Layout from "./src/ui/Layout.tsx";
import getHomePageData from "./src/controllers/HomeController.ts";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: async () => await getHomePageData(),
            },
            { path: "about", Component: AboutPage },
        ],
    },
]);
