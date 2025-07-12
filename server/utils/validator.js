
import { object, string } from 'yup';

const registerSchema = object({
    email: string().email("Invalid email format").required("Email is required").max(50),
    username: string().required("Username is required").min(3).max(20),
    password: string().required("Password is required").min(6).max(20),
});

const loginSchema = object({
    email: string().email("Invalid email format").required("Email is required").max(50),
    password: string().required("Password is required").min(6).max(20),
});

const Validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errTxt = error.errors.join(', ');
    const err = new Error(errTxt);
    next(err);
  }
};




export { registerSchema, loginSchema, Validate };