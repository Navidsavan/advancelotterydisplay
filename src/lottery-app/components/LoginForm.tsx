import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputField from "./InputField";
import { validateForm, type ValidationErrors } from "../utils/validation";
import { useNavigate } from "react-router-dom"; 

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onSwitchToReset: () => void; // 👈 add this
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSwitchToRegister,
  onSwitchToReset,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const navigate = useNavigate(); // 👈 Hook for navigation

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(email, password);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login submitted:", { email, password });
      // TODO: API call + navigation
      navigate("/dashboard");
    }
  };

  return (
    <>
      <h2 className="login-title">Sign in to your account</h2>
      <form onSubmit={handleLogin} className="login-form">
        <InputField
          label="Email or Username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <div className="password-field">
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" className="remember-checkbox" />
            Remember me
          </label>
          <span
            className="forgot-password"
            style={{ cursor: "pointer", color: "#365bfc" }}
            onClick={onSwitchToReset} // 👈 trigger reset mode
          >
            Forgot your password?
          </span>
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>

        <p className="signup-link">
          Need an account?{" "}
          <span
            className="signup-link"
            style={{ cursor: "pointer", color: "#646cff" }}
            onClick={onSwitchToRegister}
          >
            Create an account
          </span>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
