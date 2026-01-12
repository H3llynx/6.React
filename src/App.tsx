import { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router";
import { HomePage } from "./features/home/HomePage";
import { PricingPage } from "./features/pricing/PricingPage";

function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="pricing" element={<PricingPage />} />
    </Routes>
  )
}

export default App
