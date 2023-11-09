import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux';
import axiosInstance from "../../axiosInterceptors/axiosInstance";

function AuthParent()  {
  const isAuthenticated=useSelector(state => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Outlet/>;
  }

  return (
    <Navigate to="/Login" />
  )
};
 export default AuthParent;