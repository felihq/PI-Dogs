const { Router } = require('express');
const { Dogs, Temperament } = require('../db')
const { allInfo } = require("./controllers/DogsInfo");
const router = Router();

router.get('/dogs/:idRaza', async (req, res) => {
    const { idRaza } = req.params;
    let dogsId = await Dogs.findOne({
            where: {
            id: idRaza,
        },
         include: Temperament, 
        })
    dogsId.length? res.status(200).send(dogsId) : res.status(404).send('Dog not found')
})

module.exports = router;