export const checkValidData = (email, password, fullName='') => {
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    //* <regex>.test() returns a boolean value

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (fullName !== '') {
        let fullNameValid = null;
        const isFullNameValid = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(fullName);
        fullNameValid = isFullNameValid;
        if(!fullNameValid) return "Full Name is not valid";
    }
    
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
};