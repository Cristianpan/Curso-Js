import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <nav className="flex gap-4">
      <Link to="/admin/perfil" className="font-semibold text-lg text-gray-700">
        Pefil
      </Link>
      <Link to="/admin/cambiar-password" className="font-semibold text-lg text-gray-700">
        Cambiar Contraseña
      </Link>
    </nav>
  );
};

export default ProfileNav; 