import Joi from "joi";
export const autorSchema = Joi.object({
  nombre: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.empty": "El nombre no puede estar vacío",
      "string.min": "El nombre debe tener al menos 3 caracteres",
      "any.required": "El nombre es obligatorio",
    }),

  nacionalidad: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      "string.empty": "La nacionalidad no puede estar vacía",
      "string.min": "La nacionalidad debe tener al menos 3 caracteres",
      "any.required": "La nacionalidad es obligatoria",
    }),

  fechaNacimiento: Joi.date()
    .iso()
    .less("now") // No puede ser una fecha futura
    .required()
    .messages({
      "date.base": "La fecha de nacimiento debe ser válida",
      "date.less": "La fecha de nacimiento no puede ser futura",
      "any.required": "La fecha de nacimiento es obligatoria",
    }),
});
