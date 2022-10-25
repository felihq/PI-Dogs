
const {allInfo} = require('./DogsInfo')
const {Dogs, Temperament} = require('../../db')


const getDogById = async (id) => {
    try {
        await allInfo();
     if(id){
      const info = await Dogs.findAll({
        attributes: [ 'id' ],
        where: {
                  id: id
                },
        include: [{
          model: Temperament,
        }]
      })
      return info;
     } 
     
      
    } catch (error) {
      console.log(error.message)
    }
  };

  module.exports = getDogById;