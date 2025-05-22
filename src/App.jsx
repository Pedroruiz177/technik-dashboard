import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import UsersPage from "./routes/dashboard/customers";
import NewCustomerPage from "./routes/dashboard/newuser";
import MinhaConta from "./pages/MInhaConta";
import Configuracoes from "./pages/Configuracoes";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro"; // Importa a página de cadastro aqui
import Autentication from "./pages/autentication";
import CreditCard from "./routes/dashboard/cards";
import AnalyticPage from "./routes/dashboard/analytics.JSX";
import InvoicePage from "./routes/dashboard/InvoicePage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "analytics",
                    element: <AnalyticPage />,
                },
                {
                    path: "reports",
                    element: <h1 className="title">Reports</h1>,
                },
                {
                    path: "customers",
                    element: <UsersPage />,
                },
                {
                    path: "new-customer",
                    element: <NewCustomerPage />,
                },
                {
                    path: "verified-customers",
                    element: <h1 className="title">Verified Customers</h1>,
                },
                {
                    path: "cards",
                    element: <CreditCard />,
                },
                {
                    path: "InvoicePage",
                    element: <InvoicePage />,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
                {
                    path: "minha-conta",
                    element: <MinhaConta />,
                },
                {
                    path: "configuracoes",
                    element: <Configuracoes />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/cadastro", // rota do cadastro
            element: <Cadastro />,
        },
        {
            path: "/2fa",
            element: <Autentication />,
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
