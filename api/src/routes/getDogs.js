const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { allInfo } = require("./controllers/DogsInfo");
const { Dog, Temperament } = require("../db");

router.get('/', async (req, res) => {
  const name = req.query.name;
  const dogsName = await allInfo();
    try{
  if(name){
      const dog = dogsName.filter((e) => {
        e.name.toLowerCase().includes(name.toLowerCase())
      })
      dog.length? res.status(200).send(dog) : res.status(404).send('Dog not found')
  } else {
    res.status(200).send(dogsName)
  }
} catch(error) { 
    console.log(error)
}
})

module.exports = router;