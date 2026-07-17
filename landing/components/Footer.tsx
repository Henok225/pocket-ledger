export default function Footer(){

  return (
    <footer
      className="
        text-center
        py-8
        text-gray-500
      "
    >

      © {new Date().getFullYear()} Pocket Ledger.
      All rights reserved.

    </footer>
  );
}