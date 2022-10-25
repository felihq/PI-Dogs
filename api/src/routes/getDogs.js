
const { Router } = require("express");
const router = Router();
const { allInfo } = require("./controllers/DogsInfo");

router.get('/dogs', async (req, res) => {
  
  if(req.query.name){
  try{
      let {name} = req.query
      const dogsName2 = await allInfo();
      const dog = dogsName2.filter((e) =>  e.name.toLowerCase().includes(name.toLowerCase()))
      if(dog.length >= 1){ res.status(200).send(dog) 
      } else {
        throw new Error(error)
      }
      } catch(error) {
        res.status(404).send('Dog not found')
        console.log(error)
      }
    } else {
      try {
        let allDogs = await allInfo();
        res.status(200).json(allDogs);
      } catch (error) {
        res.status(404).send('Missing data')
      }
    }
})

module.exports = router;