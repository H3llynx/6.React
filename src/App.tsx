import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PricingPage } from "./pages/PricingPage";

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="pricing" element={<PricingPage />} />
    </Routes>
  )
}

export default App
