const { Router } = require('express');
const { Country, Activity} = require('../db.js');
const router = Router();

router.get('/', async (req, res) => {
  const allActivities = await Activity.findAll();
          res.send(allActivities);

})


router.post('/', async (req, res, next) => {
    const { name, difficulty, duration, season, countryId } = req.body;

    const exists = await Activity.findOne({
      where: {
        name,
      },
    });
  
    if (!exists) {
      const addAct = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      const countrymatch = await Country.findAll({
        where: {
          id: countryId,
        },
      });
  
      const response = await addAct.addCountries(countrymatch);
  
      return res.status(200).json(response);
    }
  
    const countrymatch = await Country.findAll({
      where: {
        id: countryId,
      },
    });
    // console.log(addAct)
    // console.log(countrymatch)
  
    const response = await exists.addCountries(countrymatch);
  
    res.status(200).json(response);
    

})

/* const { name, difficulty, duration, season, countryId } = req.body;*/

module.exports = router;