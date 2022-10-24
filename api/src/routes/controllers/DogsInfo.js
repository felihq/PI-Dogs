const {Router} = require('express');
const axios = require('axios');
const { Dog, Temperament} = require('../../db');
const API = 'https://api.thedogapi.com/v1/breeds'

const dogsDBinfo = async ()=>{

   let dogsDB1 = await Dog.findAll({
       include: Temperament        
       });       


   dogsDB1 = JSON.stringify(dogsDB1); 
   dogsDB1 = JSON.parse(dogsDB1); 


   dogsDB1 = dogsDB1.reduce((acc, el) => acc.concat({
       ...el, temperaments: el.temperaments.map(g => g.name)
   }), []) 
   return dogsDB1
}


const getApiInfo = async () => {
   const apiInfo = await axios.get(API)


   const convTo = (data) => {
      if (data) return data.split(', ')
   }


   const allDogs = apiInfo.data.map((e) => {
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
  return allDogs;

}

const allInfo = async () => {
   apiInfo = await getApiInfo()
   dbInfo = await dogsDBinfo()
   const infoTotal = [...dbInfo, ...apiInfo]
   return infoTotal;
}

module.exports = {
   allInfo, getApiInfo, dogsDBinfo 
};
