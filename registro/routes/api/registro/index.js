const express = require('express');
const router = express.Router();
const {
  getAll,
  getAllFacet,
  addOne,
  getById
 
} = require('./registro.model');

router.get(
  "/",
  async (req, res)=>{
    try{
      console.log(req.user);
      let allowed = req.user.roles.indexOf("useradmin");
      if (allowed >= 0){
        let rows = await getAll();
        res.status(200).json(rows);
      } else {
        res.status(401).json({"msg":"No tiene privilegios"});
      }
    }catch(ex){
      res.status(500).json({"msg":"Error"});
    }
  }
);

router.get(
  "/facet/:page/:size",
  async (req, res) => {
    try {
      let {page, size} = req.params;
      page = parseInt(page);
      size = parseInt(size);
      let result = await getAllFacet(page, size);
      res.status(200).json({...result, page, size});
    } catch (ex) {
      res.status(500).json({ "msg": "Error" });
    }
  }
);

router.get(
  "/byid/:id",
  async (req, res)=>{
    try{
      let {id} = req.params;
      let row = await getById(id);
      res.status(200).json(row);
    }catch(ex){
      res.status(500).json({ "msg": "Error" });
    }
  }
);


router.post(
  "/new",
  async (req, res)=>{
    try{
      let {id, name, apellido, email, telefono, direccion, genero, profesion} = req.body;
      let docInserted = await addOne(id, name, apellido, email, telefono, direccion, genero, profesion, req.user._id);
      res.status(200).json(docInserted);
    }catch(ex){
      res.status(500).json({"msg":"Error"});
    }
  }
);


module.exports = router;
