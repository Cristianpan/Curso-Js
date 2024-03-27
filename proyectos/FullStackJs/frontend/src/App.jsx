import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Confirm from "./pages/ConfirmPassword";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";
import AdminLayout from "./layout/AdminLayout";
import AdminPatients from "./pages/AdminPatients";
import { AuthProvider } from "./context/AuthProvider";
import { PatientProvider } from "./context/PatientProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PatientProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />}></Route>
              <Route path="registrar" element={<Register />}></Route>
              <Route
                path="olvide-password"
                element={<ForgetPassword />}
              ></Route>
              <Route
                path="olvide-password/:token"
                element={<NewPassword />}
              ></Route>
              <Route path="confirmar/:id" element={<Confirm />}></Route>
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminPatients />}></Route>
            </Route>
          </Routes>
        </PatientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
