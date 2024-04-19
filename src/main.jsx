import React from "react";
import ReactDOM from "react-dom/client";
import {
    Router,
    Routes,
    Route,
    RouterProvider,
    createBrowserRouter,
    BrowserRouter,
    useLocation,
} from "react-router-dom";
import "./index.css";
import HomePage from "./components/HomePage";
import PalettePage from "./components/PalettePage";
import NotFoundPage from "./components/NotFoundPage";
import { AnimatePresence } from "framer-motion";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomePage />,
//         errorElement: <NotFoundPage />,
//     },
//     {
//         path: "palette/:paletteId",
//         element: <PalettePage />,
//     },
// ]);

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/palette/:paletteId" element={<PalettePage />} />
                <Route path="/*" element={<NotFoundPage/>} />
            </Routes>
        </AnimatePresence>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    </React.StrictMode>
);
