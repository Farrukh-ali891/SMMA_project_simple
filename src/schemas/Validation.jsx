import * as yup from "yup";

const passwordRules = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{3,}$/;

export const UserSchema = yup.object().shape({
    email: yup.string().email("Please enter correct email.").required("Email is required"),
    username: yup.string().min(8, "User Name must be longer than 8 characters").required("User name is required"),
    // password: yup.string().min(3).matches(passwordRules, {message: "Please enter strong password"}).required("Password is Required"),
    password: yup.string().min(3).required("Password is Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password not match").required("Confirm password is Required"),
})