export interface ValidationErrors {
    email?: string;
    password?: string;
  }
  
  export const validateForm = (email: string, password: string): ValidationErrors => {
    const errors: ValidationErrors = {};
  
    // Email or Username
    if (!email) {
      errors.email = "Email or Username is required";
    } else if (!/\S+@\S+\.\S+/.test(email) && email.length < 3) {
      errors.email = "Enter a valid email or username";
    }
  
    // Password
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    return errors;
  };


