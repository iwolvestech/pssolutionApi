const mongoose = require("mongoose");
const Joi = require("joi");

const categorieSvcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  smallDesc: {
    type: String,
    minlength: 5,
    required: true,
  },
  largeDesc: {
    type: String,
    minlength: 5,
  },
  image: {
    type: String,
  },
});
const CategorieSvc = mongoose.model("categorieSvc", categorieSvcSchema);

function validateCategorieSvc(categorieSvc) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    smallDesc: Joi.string().min(3).max(255).required(),
    largeDesc: Joi.string().min(3),
    image: Joi.string().min(5).max(255),
  });
  return schema.validate(categorieSvc);
}

exports.categorieSvcSchema = categorieSvcSchema;
exports.CategorieSvc = CategorieSvc;
exports.validate = validateCategorieSvc;
