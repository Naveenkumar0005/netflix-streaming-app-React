export const checkValidData = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!*?&])[A-Za-z\d@$!*?&]{8,}$/.test(password);

    if(!emailRegex) {
        return "Please enter a valid email address.";
     
    }

    if(!passwordRegex) {
        return "Password must be at least 8 characters long and contain at least one letter and one number.";
        
    }

    return null; // Return null if both email and password are valid
};