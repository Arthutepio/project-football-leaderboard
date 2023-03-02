import * as Joi from 'joi';

const userSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(6).required(),
});

const validateLogin = (email: string, password: string) => {
  const { error } = userSchema.validate({ email, password });

  return error;
};

export default validateLogin;
