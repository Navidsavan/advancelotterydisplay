// src/components/RegisterForm.tsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputField from "./InputField";
import { validateRegister, type ValidationErrors } from "../utils/validateRegister";

interface Props {
  onSwitchToLogin: () => void;
}

const RegisterForm: React.FC<Props> = ({ onSwitchToLogin }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateRegister(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration data:", form);
      // TODO: call API
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputField
        label="First Name"
        type="text"
        value={form.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
        error={errors.firstName}
      />
      <InputField
        label="Last Name"
        type="text"
        value={form.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
        error={errors.lastName}
      />
      <InputField
        label="Phone Number"
        type="text"
        value={form.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={errors.phone}
      />
      <InputField
        label="Email"
        type="email"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
      />
      <InputField
        label="Username"
        type="text"
        value={form.username}
        onChange={(e) => handleChange("username", e.target.value)}
        error={errors.username}
      />

      <div className="password-field">
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
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

      <InputField
        label="Confirm Password"
        type={showPassword ? "text" : "password"}
        value={form.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
        error={errors.confirmPassword}
      />

      <button type="submit" className="login-button">Register</button>

      <p className="signup-link">
        Already registered?{" "}
        <span
          className="signup-link"
          style={{ cursor: "pointer", color: "#646cff" }}
          onClick={onSwitchToLogin}
        >
          Login
        </span>
      </p>
    </form>
  );
};

export default RegisterForm;
