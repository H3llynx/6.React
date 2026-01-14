import { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router";
import { CalculatorPage } from "./features/calculator/CalculatorPage";
import { HomePage } from "./features/home/HomePage";

function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="calculator" element={<CalculatorPage />} />
    </Routes>
  )
}

export default App
