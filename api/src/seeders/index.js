const axios = require ('axios');
const { Country, } = require ('../db')
const { API_COUNTRIES} = process.env;

async function Load(req, res) {
  try {
    {
      const allCountries = await axios.get(API_COUNTRIES);
      const ModelCountries = allCountries.data.map((e) => {
        return {
          name: e.name.common || 'name',
          id: e.cca3,
          flag: e.flags[0] || 'no hay bandera',
          region: e.region,
          capital: e.capital && e.capital[0] || 'capital',
          subregion: e.subregion || 'subregion',
          area: e.area || 123,
        };
      });
      ModelCountries.forEach(async (e) => {
        await Country.findOrCreate({
          where: {
            name: e.name,
            id: e.id,
            flag: e.flag,
            region: e.region,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
          },
        });
      });
    }
    console.log('DB success');
  } catch (error) {

    res.json(error);
  }
}
module.exports= {Load}