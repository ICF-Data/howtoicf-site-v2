import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
