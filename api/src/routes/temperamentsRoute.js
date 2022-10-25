const { Router } = require('express');
const router = Router();
const axios = require('axios')
const api = 'https://api.thedogapi.com/v1/breeds'
const { Temperament } = require('../db')


router.get('/temperaments', async (req, res) => {
  try {
    const temperamentsFromDB = await Temperament.findAll();
    if(temperamentsFromDB >= 1) res.send(temperamentsFromDB)
  
    const apiInfo = await axios.get(api)
    let everyTemperament =  apiInfo.data?.map(dog => dog.temperament ? dog.temperament : null).map(dog => dog && dog.split(', '));
   const mySet = new Set(everyTemperament.flat());
   let temperamentsToDB =  mySet.forEach((e) => {
    if(e){
      Temperament.findOrCreate({
        where: { name: e}
    });
    }
   })
   temperamentsToDB = await Temperament.findAll();
   res.status(200).send(temperamentsToDB) 
  } catch (error) {
    res.status(404).send("No temperaments found")
    console.log(error.message)
  }
})

module.exports = router;
