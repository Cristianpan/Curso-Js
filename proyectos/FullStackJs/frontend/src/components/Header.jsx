import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { closeSession } = useAuth();
  return (
    <header className="flex justify-between flex-col h-auto py-3 px-10 items-center bg-white shadow-light sticky top-0 mb-8 md:h-20 md:flex-row">
      <h1 className="font-bold text-2xl text-indigo-600 uppercase">
        Admin APV
      </h1>

      <nav className="flex gap-7">
        <Link to="/admin" className="text-gray-800 text-xl font-semibold">
          Pacientes
        </Link>
        <Link to="/admin" className="text-gray-800 text-xl font-semibold">
          Perfil
        </Link>

        <button
          type="button"
          className="text-gray-800 text-xl font-semibold"
          onClick={closeSession}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default Header;
