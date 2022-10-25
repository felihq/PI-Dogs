const { Router } = require('express');
const router = Router();
// const { getApiInfo } = require('./controllers/DogsInfo')
const axios = require('axios')
const api = 'https://api.thedogapi.com/v1/breeds'

router.get('/temperaments', async (req, res) => {
  try {
    const apiInfo = await axios.get(api)
    
    const convTo = (data) => {
        if (data) return data.split(', ')
     }
    const apiMapeada = apiInfo.data?.map((e) => {
        return{
            temperament: convTo(e.temperament)
        }
    }) 
   const mySet = new Set(apiMapeada);
   mySet? res.status(200).send([...mySet]) : res.status(404).send("No temperaments found")
  } catch (error) {
    console.log(error.message)
  }
})

module.exports = router;
//  const filteredDogs = dogs.filter((e) => e.temperament)
//  filteredDogs? res.status(200).send(filteredDogs) : res.status(404).send("No temperaments found")