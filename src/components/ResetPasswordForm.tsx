import React, { useState } from "react";
import InputField from "./InputField";

interface ResetPasswordFormProps {
  onSwitchToLogin: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ email?: string }>({});

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Reset password for:", email);
      // TODO: call API
    }
  };

  return (
    <>
      <h2 className="login-title">Reset Password?</h2>
      <p style={{ textAlign: "center", marginBottom: "1rem", opacity:0.7 }}>
        Please enter the email associated with your account.
      </p>

      <form onSubmit={handleSubmit} className="login-form">
        <InputField
          label="Email or Username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <button type="submit" className="login-button">
          Submit
        </button>

        <p className="signup-link">
          Already have an account?{" "}
          <span
            className="signup-link"
            style={{ cursor: "pointer", color: "#646cff" }}
            onClick={onSwitchToLogin}
          >
            Log in
          </span>
        </p>
      </form>
    </>
  );
};

export default ResetPasswordForm;
