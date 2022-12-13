import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavigationPage() {
  return (
    <div>
      <Link to="/SS2">SS2</Link>
      <Link to="/SS3">SS3</Link>

      <Outlet></Outlet>
    </div>
  );
}

export default NavigationPage;
