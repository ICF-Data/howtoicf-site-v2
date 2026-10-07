import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import TerritoryPage from './pages/TerritoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-pricing" element={<PricingPage />} />
        <Route path="/ne" element={<TerritoryPage slug="ne" />} />
        <Route path="/se" element={<TerritoryPage slug="se" />} />
        <Route path="/sw" element={<TerritoryPage slug="sw" />} />
      </Routes>
    </BrowserRouter>
  );
}
