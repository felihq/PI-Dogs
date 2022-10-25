const { Router } = require('express');
const { Dogs, Temperament } = require('../db');
const { allInfo } = require("./controllers/DogsInfo");
// const  getDogById  = require('./controllers/getDogsById');
const { getApiInfo } = require('./controllers/DogsInfo');
const router = Router();
const axios = require('axios');



router.get('/dogs/:id', async (req, res) => {
    const { id } = req.params
    const API = `https://api.thedogapi.com/v1/breeds/${id}`
 try {
    if(id){
    const apiInfo = axios.get(API);
    const convTo = (data) => {
        if (data) return data.split(', ')
     }
    const allInfo = apiInfo.data?.map((e) => {
        return{
      id: e.id,
      name: e.name,
      height: e.height.metric,
      weight: e.weight.metric,
      life_span: e.life_span,
      temperament: convTo(e.temperament),
      image: e.image.url
      }
    })
    res.status(200).send(allInfo)
}
 } catch (error) {
    res.status(404).send('Dog not found')
    console.log(error.message)
 }
})

   // const { idRaza } = req.params;
//     if(idRaza.includes('-')){
//         let dogsId = await Dogs.findOne({
//         where: {
//          id: idRaza,
//      },
//       include: Temperament, 
//      })
//      dogsId.length? res.status(200).send(dogsId) : res.status(404).send('Dog not found')
//  } else {
    
    // let dogsAPI = await getApiInfo();
    // let dogsAPIfiltered = dogsAPI.filter((e) => e.id === idRaza)
    // dogsAPIfiltered? res.status(200).send(dogsAPIfiltered) : res.status(404).send("Dog's ID has not been found")
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


module.exports = router;