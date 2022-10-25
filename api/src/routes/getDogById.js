const { Router } = require('express');
const { Dogs, Temperament } = require('../db');
const { getApiInfo } = require('./controllers/DogsInfo');
const router = Router();



router.get('/dogs/:idRaza', async (req, res) => {
   
   const { idRaza } = req.params;
       if(idRaza.includes('-')){
           let dogsId = await Dogs.findOne({
           where: {
            id: idRaza,
        },
         include: Temperament, 
        })
        dogsId.length? res.status(200).send(dogsId) : res.status(404).send('Dog not found')
    } else {
    let dogsAPI = await getApiInfo();
    let dogsAPIfiltered = dogsAPI.filter((e) => e.id == idRaza)
    dogsAPIfiltered? res.status(200).send(dogsAPIfiltered) : res.status(404).send("Dog's ID has not been found")
    }
})

module.exports = router;