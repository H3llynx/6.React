import { Route, Routes } from "react-router";
import { HomePage } from "./features/home/HomePage";
import { PricingPage } from "./features/pricing/PricingPage";

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="pricing" element={<PricingPage />} />
    </Routes>
  )
}

export default App
