import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

function PrivateRoute({ children }) {
  // Nếu chưa thì redirect tới trang login
  // if (!isLogin) {
  //   return ;
  // }

  return localStorage.token ? children : <Navigate to="/signin" replace />;
}

export default PrivateRoute;
