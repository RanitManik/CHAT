import { Routes, Route } from "react-router-dom";
import { HomeRoute } from "@/route/Home.route.jsx";
import { ErrorRoute } from "@/route/Error.route.jsx";
import LoginRoute from "@/route/Login.route.jsx";
import RegisterRoute from "@/route/Register.route.jsx";

export default function App() {
    return (
        <Routes>
            <Route index path="/" element={<HomeRoute />} />
            <Route path="/login" element={<LoginRoute />} />
            <Route path="/register" element={<RegisterRoute />} />
            <Route path="*" element={<ErrorRoute />} />
        </Routes>
    );
}
