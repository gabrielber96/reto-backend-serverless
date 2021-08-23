const { Router } = require("express");
const router = Router();
const { getUsers, createUsers } = require("../controllers");
const { dataValidation } = require("../middlewares");
const { body } = require("express-validator");
router.get("/users/:id", getUsers);
router.post(
  "/users",
  [
    body("nombre")
      .isString()
      .withMessage("Se require un string")
      .bail()
      .not()
      .isEmpty()
      .withMessage("No puede ser vacio")
      .bail()
      .isLength({ min: 4 })
      .withMessage("4 letras minimas"),
    body("altura").isInt().withMessage("Tiene que ser Un numero"),
    body("color_pelo")
      .isString()
      .withMessage("Se require un string")
      .default("n/a"),
    body("color_piel")
      .isString()
      .withMessage("Se require un string")
      .bail()
      .not()
      .isEmpty()
      .withMessage("No puede ser vacio"),
    body("color_ojo")
      .isString()
      .withMessage("Se require un string")
      .bail()
      .not()
      .isEmpty()
      .withMessage("No puede ser vacio"),
    body("ano_nacimiento")
      .isString()
      .withMessage("Se require un string")
      .bail()
      .not()
      .isEmpty()
      .withMessage("No puede ser vacio"),
    body("genero")
      .isString()
      .withMessage("Se require un string")
      .default("n/a"),
    body("mundo_natal").isURL().withMessage("Se require una URL"),
    body("creado").isISO8601().withMessage("Se requiere un Date"),
    body("editado").isISO8601().withMessage("Se requiere un Date"),
    body("url").isURL().withMessage("Se require una URL"),
    body("peliculas.*").isURL().withMessage("Se require una URL"),
    body("peliculas.*").isURL().withMessage("Se require una URL"),
    body("especies.*").isURL().withMessage("Se require una URL"),
    body("vehiculos.*").isURL().withMessage("Se require una URL"),
    body("naves_estelares.*").isURL().withMessage("Se require una URL"),
    dataValidation,
  ],
  createUsers
);

router.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports = router;
