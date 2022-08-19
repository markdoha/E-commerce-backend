const joi = require("joi");
const express = require("express");

const strongPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

let accValidator = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).max(20).required(),
    userName: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .regex(RegExp(strongPass))
      .required(),
  });
  let { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

module.exports = { 
    accValidator

};
