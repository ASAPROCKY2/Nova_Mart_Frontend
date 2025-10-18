// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// ===== Public pages =====
import LandingPage from "./pages/landingpage";
import Register from "./pages/auth/register";
import VerifyUser from "./pages/auth/VerifyUser";
import Login from "./pages/auth/login";
import AboutPage from "./pages/AboutPage"; // ✅ Added About Page route

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ===== PUBLIC ROUTES ===== */}
          <Route path="/" element={<LandingPage />} /> {/* 🏠 NovaMart Landing Page */}
          <Route path="/about" element={<AboutPage />} /> {/* 🧾 About Page */}
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyUser />} />
          <Route path="/login" element={<Login />} />

          {/* 🚀 Future protected routes (add later):
              <Route path="/shop" element={<ShopDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} /> 
          */}
        </Routes>
      </BrowserRouter>

      {/* ✅ Notifications (Sonner) */}
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            error: "bg-red-500 text-white",
            success: "bg-green-500 text-white",
            info: "bg-blue-500 text-white",
          },
        }}
      />
    </>
  );
}

export default App;
