import Joi from "joi";

const loginInfoSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string()
    .required()
    .min(7)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});
const createCertificateSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  from: Joi.date().iso().required(),
  to: Joi.date().iso().required(),
  options: Joi.string().min(2).required(),
  id: Joi.string().min(5).required(),
});

export { loginInfoSchema, createCertificateSchema };
