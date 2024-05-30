import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/user/User";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-profile" element={<User />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
