const {Router} = require('express');
const router = Router();
const {Dogs, Temperament} = require('../db')

router.post('/dogs', async (req, res) => {
   let {name, height, weight, life_span, temperament, imagen} = req.body
   try {
    if(!name || !height || !weight || !temperament){
        return res.status(404).send('Missing data')
} else {
    let newDog = await Dogs.create({
        name,
        height,
        weight,
        life_span,
        temperament,
        imagen
    })
    let temperamentToDb = await Temperament.findAll({
        where: {name:temperament}
       })
       newDog.addTemperament(temperamentToDb)
       res.status(200).send('Dog created sucessfully!')
}
   } catch (error) {
    res.status(404).send('Dog not created')
    console.log(error.message)
   }
})

module.exports = router;