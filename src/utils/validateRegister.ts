// src/utils/validation.ts
export interface ValidationErrors {
    [key: string]: string;
  }
  
  interface RegisterFormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }
  
  export const validateRegister = (form: RegisterFormData): ValidationErrors => {
    const newErrors: ValidationErrors = {};
  
    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.lastName) newErrors.lastName = "Last name is required";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.username) newErrors.username = "Username is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
  
    return newErrors;
  };
  