import React, { useState } from "react";
import "../assets/styles/LoginPage.css";
import logo from "../assets/logo.png";
import promoimage from "../assets/promoimage.png";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import ResetPasswordForm from "../components/ResetPasswordForm"; // 👈 new component

const LoginPage: React.FC = () => {
  // manage modes instead of just showRegister
  const [mode, setMode] = useState<"login" | "register" | "reset">("login");

  return (
    <div className="login-container">
      {/* Left side image */}
      <div className="login-image-section">
        <img src={promoimage} alt="Illustration" className="login-image" />
      </div>

      {/* Right side form */}
      <div className="login-form-section">
        <div className="login-logo">
          <img src={logo} alt="Logo" className="login-logo-img" />
        </div>

        {mode === "register" && (
          <>
            <h2 className="login-title">Create your account</h2>
            <RegisterForm onSwitchToLogin={() => setMode("login")} />
          </>
        )}

        {mode === "login" && (
          <LoginForm
            onSwitchToRegister={() => setMode("register")}
            onSwitchToReset={() => setMode("reset")}
          />
        )}

        {mode === "reset" && (
          <ResetPasswordForm onSwitchToLogin={() => setMode("login")} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
