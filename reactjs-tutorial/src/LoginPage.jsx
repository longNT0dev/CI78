import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          localStorage.sessionToken = "something";
          setTimeout(() => navigate("/"), 1200)
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
