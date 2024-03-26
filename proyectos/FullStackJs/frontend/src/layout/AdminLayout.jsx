import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminLayout = () => {
  const { auth, loading } = useAuth();

  if (loading) return;

  return (
    <>
      <Header />

      {auth?._id ? (
        <main className="container mx-auto">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}

      <Footer />
    </>
  );
};

export default AdminLayout;
