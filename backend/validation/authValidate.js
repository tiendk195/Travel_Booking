import Joi from "joi";

const registerValidator = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "any.required": "Username not null",
    "string.min": "Username must be at least 3 characters",
  }),
  email: Joi.string().email().messages({
    "string.email": "Invalid email",
  }),

  password: Joi.string().required().messages({
    "any.required": "Password not null",
  }),
});

const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { registerValidator, loginValidator };
