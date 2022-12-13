import React, { useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ children }) {
  console.log(children);
  // Kiểm tra trạng thái đăng nhập, nếu đăng nhập rồi thì trả về cái children còn
  // Nếu trong localStorage có token (kiểm tra đăng nhập hay chưa)
  const isLogin = localStorage.sessionToken;

  // Nếu chưa thì redirect tới trang login
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
