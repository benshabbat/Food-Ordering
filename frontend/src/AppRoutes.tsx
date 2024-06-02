import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Layout from "./layouts/Layout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home</Layout>} />
      <Route path="/user-profile" element={<User />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
