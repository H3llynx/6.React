import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { CalculatorPage } from "./features/calculator/CalculatorPage";
import { HomePage } from "./features/home/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'calculator',
                element: <CalculatorPage />
            }
        ]
    }
],
    { basename: "/6.React" });