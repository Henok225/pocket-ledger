import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex gap-6">
      <h1 className="font-bold text-xl mr-auto">
        Pocket Ledger
      </h1>

      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          isActive
            ? "font-bold underline"
            : "hover:text-blue-300"
        }
      >
        Transactions
      </NavLink>

      <NavLink
        to="/overview"
        className={({ isActive }) =>
          isActive
            ? "font-bold underline"
            : "hover:text-blue-300"
        }
      >
        Overview
      </NavLink>
    </nav>
  );
}