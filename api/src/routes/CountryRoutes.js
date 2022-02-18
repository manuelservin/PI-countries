const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const router = Router();
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    if (!name) {
      const countryAll = await Country.findAll({ include: Activity });
      res.send(countryAll);
    } else {
      const countryQuery = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Activity,
      });

      if (!countryQuery[0]) {
        console.log("error");

        return res.status(404).json({
          error: ` no se encuentra ningun Pais con el nombre , ${name}`,
        });
      }
      return res.send(countryQuery);
    }
  } catch (error) {
    res.send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id.toUpperCase();
    const country = await Country.findOne({
      where: {
        id,
      },
      include: Activity,
    });

    return res.json(country);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
