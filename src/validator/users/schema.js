const Joi = require('joi');

const UserPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().require(),
  fullname: Joi.string().require(),
});

module.exports = { UserPayloadSchema };
