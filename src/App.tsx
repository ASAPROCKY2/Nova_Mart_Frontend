// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// ===== Public pages =====
import Register from "./pages/auth/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ===== PUBLIC ROUTE ===== */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      {/* Notifications (Sonner) */}
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
