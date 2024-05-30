import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={}/>
        <Route path="/user-profile" element={}/>
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRoutes