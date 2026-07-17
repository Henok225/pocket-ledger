import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Transactions from "../pages/Transactions";
import Overview from "../pages/Overview";
import Navbar from "../components/Navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-8">
      <Routes>
        <Route path="/" element={<Navigate to="/transactions" replace />} />

        <Route
          path="/transactions"
          element={<Transactions />}
        />
        <Route
 path="/overview"
 element={<Overview />}
/>
      </Routes>
        </div>
      
    </BrowserRouter>
  );
}