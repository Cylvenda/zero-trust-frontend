import type { RegisterFormData, LoginFormData } from "../types/auth";

interface ErrorType {
    [key: string]: string;
}

export const registerFormValidation = (
    formData: RegisterFormData,
    setFormErrors: (errors: ErrorType) => void
): boolean => {
    const errors: ErrorType = {};
    let isValid = true;

    if (!formData.email) {
        errors.email = 'Email address is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email address format';
        isValid = false;
    }

    if (!formData.password) {
        errors.password = 'Password field is required';
        isValid = false;
    } else if (formData.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
        isValid = false;
    }

    if (!formData.first_name) {
        errors.first_name = 'Your first name is required';
        isValid = false;
    }

    if (!formData.last_name) {
        errors.last_name = 'Your last name is required';
        isValid = false;
    }

    if (!formData.username) {
        errors.username = 'Username is required';
        isValid = false;
    }

    setFormErrors(errors); // Set the errors
    return isValid;
};

export const loginFormValidation = (formData: LoginFormData, setFormErrors: (errors: ErrorType) => void): boolean => {
    const errors: ErrorType = {};
    let isValid = true;

    if (!formData.email) {
        errors.email = 'Email address is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email address format';
        isValid = false;
    }

    if (!formData.password) {
        errors.password = 'Password is required';
        isValid = false;
    }

    setFormErrors(errors); // Set the errors
    return isValid;
};
