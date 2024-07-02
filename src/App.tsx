import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ReviewPage } from "./pages/Review";
import { ReservationPage } from "./pages/Reservation";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { AdminPage } from "./pages/Admin";
import { Logout } from "./models/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
