const {Router} = require('express');
const router = Router();
const {Dogs, Temperament} = require('../db')

router.post('/dogs', async (req, res) => {
    const {name, life_span, min_weight, max_weight, min_height, max_height, image, temperament} = req.body;
    try {
        const dog = await Dogs.create({
            name,
            min_weight,
             max_weight,
             min_height,
             max_height,
             life_span,
             image
        })
        const temperamentDB = await Temperament.findAll({
            where: {
                name: temperament
            }
        })
        dog.addTemperament(temperamentDB) 
        res.send(dog) 
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;

// router.post("/dogs", async (req, res) => {
//     let {name, life_span, min_weight, max_weight, min_height, max_height, image, temperament} = req.body;
//     try{
//         let postDog = await Dogs.create ({
//             name,
//             min_weight,
//             max_weight,
//             min_height,
//             max_height,
//             life_span,
//             image
//         })
//     let temperamentDb = await Temperament.findAll ({
//         where: {name:temperament}
//     })
//     postDog.addTemperament(temperamentDb)
//     res.send("Dog created successfully")
//     }
//     catch (error) {
//         res.status(500).send("Error creating dog")

//     }
// })

// module.exports = router;

