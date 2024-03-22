import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>Desde Auth Layout</h1>
      <main className="container mx-auto md:grid md:grid-cols-2 gap-12 mt-12 py-5">
      <Outlet />

      </main>
    </>
  );
};

export default AuthLayout;
