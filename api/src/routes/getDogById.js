const { Router } = require('express');
const { Dogs, Temperament } = require('../db')
const { allInfo } = require("./controllers/DogsInfo");
const  getDogById  = require('./controllers/getDogsById')
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
    let dogsAPI = await allInfo();
    let dogsAPIfiltered = dogsAPI.filter((e) => e.id === idRaza)
    dogsAPIfiltered? res.status(200).send(dogsAPIfiltered) : res.status(404).send("Dog's ID has not been found")
 }
    // 
    // try {
    //     if(id){
    //         const getById = getDogById(id)
    //         return res.status(200).send(getById) 
    //     }
    // } catch (error) {
    //     return res.status(404).send("Dog's id has not been found")
    //     console.log(error.message)
    // }
    // if(idRaza){
    //     const allTheInfo = await allInfo();
    //     const dogsId = allTheInfo.filter((e) => {
    //         e.id === idRaza
    //     })
    //     dogsId.length? res.status(200).send(dogsId) : res.status(404).send("Dog's id has not been found")
    // }
})

module.exports = router;