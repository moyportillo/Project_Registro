const MongoDB = require('../../utilities/db');
const ObjectId = require('mongodb').ObjectID;
let db;
let snippetCollection;

//se ejecuta cuando se manda a require(este archivo)
(async function(){
    try{
      if (!snippetCollection) {
        db = await MongoDB.getDB();
        snippetCollection = db.collection("Registro");
        if(process.env.ENSURE_INDEX == 1){
          // Vamos a asegurarnos de que exista el indice
        }
      }
    }catch(ex){
      console.log(ex);
      process.exit(1);
    }
})();

module.exports.getAll = async ()=>{
  try {
    let docsCursor = snippetCollection.find({});
    let rows = await docsCursor.toArray()
    return rows;
  } catch(ex){
    console.log(ex);
    throw(ex);
  }
}

module.exports.getAllFacet = async (page, itemsPerPage) => {
  try {
    let options = {
      skip: (page - 1) * itemsPerPage,
      limit: itemsPerPage,
      projection: {id:1, name:1, apellido:1, email:1, keywords:1},
      sort:[["name", 1]]
    };

    let docsCursor = snippetCollection.find({}, options);
    let rownum = await docsCursor.count();
    let rows = await docsCursor.toArray()
    return {rownum, rows};
  } catch (ex) {
    console.log(ex);
    throw (ex);
  }
}

module.exports.getById = async (id)=>{
  try {
    const _id = new ObjectId(id);
    const filter =  {_id: _id};
    let row = await snippetCollection.findOne(filter);
    return row;
  } catch(ex){
    console.log(ex);
    throw(ex);
  }
}


module.exports.addOne = async (id, name, apellido, email, telefono, direccion, genero, profesion, user)=>{
  try{
    let newRegistro = {
      id:id,
      name:name,
      apellido:apellido,
      email:email,
      telefono:telefono,
      direccion:direccion,
      genero:genero,
      profesion:profesion,
      user:user
    };
    let result = await snippetCollection.insertOne(newRegistro);
    return result.ops;
  }catch(ex){
    console.log(ex);
    throw(ex);
  }

}

