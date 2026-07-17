export default function Navbar() {

  return (
    <nav className="flex justify-between items-center px-8 py-5">

      <h1 className="text-2xl font-bold">
        Pocket Ledger
      </h1>


      <a
  href="http://localhost:5173"
  className="
    bg-blue-600
    text-white
    px-5
    py-2
    rounded-lg
  "
>
  Dashboard
</a>

    </nav>
  );
}