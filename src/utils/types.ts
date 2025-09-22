// types.ts
export interface RegisterFormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }
  
  export type ValidationErrors = Partial<Record<keyof RegisterFormData, string>>;
  