import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-gray-300">
              Cart
            </Link>
          </li>
        </ul>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
