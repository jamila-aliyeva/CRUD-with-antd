import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import StudentsPage from "./pages/StudentsPage";
import NotFoundPage from "./pages/NotFoundPage";
import IS_LOGIN from "./constants";
import AdminLayout from "./components/AdminLayout";

function App() {
  const [isLogin, setIsLogin] = useState(
    Boolean(localStorage.getItem(IS_LOGIN))
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setIsLogin={setIsLogin} />} />
        {isLogin ? (
          <Route element={<AdminLayout setIsLogin={setIsLogin} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<StudentsPage />} />
          </Route>
        ) : null}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
