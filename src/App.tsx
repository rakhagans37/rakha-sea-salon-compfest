import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ReviewPage } from "./pages/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
