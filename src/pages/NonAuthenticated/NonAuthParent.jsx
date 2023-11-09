import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux';
import LoginScreen from "./LoginScreen";

function NonAuthParent() {
  const isAuthenticated=useSelector(state => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/Home" />;
  }

  return (
    <LoginScreen/>
  )
};

export default NonAuthParent;