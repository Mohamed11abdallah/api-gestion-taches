const { body } = require("express-validator");

const validateTache = [
  body("titre").notEmpty().withMessage("Le titre est obligatoire"),
  body("description")
    .isLength({ max: 255 })
    .withMessage("La description ne doit pas dépasser 255 caractères"),
  body("termine")
    .optional()
    .isBoolean()
    .withMessage('Le champ "termine" doit être un booléen'),
];

module.exports = { validateTache };
