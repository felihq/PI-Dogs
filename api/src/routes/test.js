router.get('/', async (req, res) => {

    //-------SI ENTRO POR QUERY----------
    if (req.query.name) {
      try {
  
        let {name} = req.query
        console.log(name)
        const dogs =  await dogsTOTALinfo()
        const result = dogs.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))
  
        if(result.length >= 1){
        res.status(200).json(result)}
        else{
          throw new Error(error)
        }
      } catch (error) {
        res.status(400).json(error);
      }
    } 
    //------------SI NO ENTRO POR QUERY DEVUELVO TODOS---------
    else {
      try {
        let total = await dogsTOTALinfo();
        res.status(200).json(total);
      } catch (error) {
        throw new Error(error);
      }
    }
  });