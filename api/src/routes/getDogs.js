
const { Router } = require("express");
const router = Router();
const { allInfo } = require("./controllers/DogsInfo");

router.get('/dogs', async (req, res) => {
  const name = req.query.name;
    try{
        if(!name){
      const dogsName = await allInfo();
      res.status(200).send(dogsName)
  } else {
    const dogsName2 = await allInfo();
       const dog = dogsName2.filter((e) => {
         e.name.toLowerCase().includes(name.toLowerCase())
       })
    dog.length? res.status(200).send(dog) : res.status(404).send('Dog not found')
  }
} catch(error) { 
    console.log(error)
}
})

module.exports = router;