import { Routes, Route } from "react-router-dom";
import { HomeRoute } from "@/route/Home.route.jsx";
import { ErrorRoute } from "@/route/Error.route.jsx";
import LoginRoute from "@/route/Login.route.jsx";
import RegisterRoute from "@/route/Register.route.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(prefersDarkScheme.matches ? "dark" : "light");
    document.body.classList.remove("light", "dark");
    document.body.classList.add(prefersDarkScheme.matches ? "dark" : "light");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
      document.body.classList.toggle("dark", e.matches);
      document.body.classList.toggle("light", !e.matches);
    };
    prefersDarkScheme.addEventListener("change", handleChange);
    return () => {
      prefersDarkScheme.removeEventListener("change", handleChange);
    };
  }, [theme]);

  return (
    <Routes>
      <Route index path="/" element={<HomeRoute />} />
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/register" element={<RegisterRoute />} />
      <Route path="*" element={<ErrorRoute />} />
    </Routes>
  );
}
