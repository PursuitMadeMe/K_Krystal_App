const express = require("express");
const chakras = express.Router();
const {
  getAllChakras,
  getChakra,
  createChakra,
  updateChakra,
  deleteChakra,
  updateChakra,
} = require("../queries/chakras.js");

const CHAKRA_PARAMS = [
  'name',
  'healing',
  'chakra',
  'image',
  'numerology',
  'category'
]

//MIDDLEWARE 
function validateId (id, response) {
  const num = Number(id)
  if(!Number.isInteger(num) || num < 1){
    response.status(400).json({error: `id param must be a positive integer; Not ${id} provided`})
    return false
  }
  return true
}

function validateChakraParams (chakra, response){
  for(const param of CHAKRA_PARAMS){
    if(!chakra.hasOwnProperty(param) || typeof chakra[param] !== 'string') {
      response.status(400).json({error : `${param} missing or wrong type, received ${chakra[param]}`})
      return false
    }
  }
  for(const param in chakra) {
    if(!CHAKRA_PARAMS.includes(param)) {
      response.status(400).json({error : `${param} field not allowed`})
      return false
    }
  }
  return true 
}




chakras.get("/", async (request, response) => {
  try {
    const allChakras = await getAllChakras();
    if (allChakras[0]) {
      response.status(200).json({ payload: allChakras, success: true });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

chakras.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    if(!validateId(id, response)){
      return 
    }
    const chakra = await getChakra(Number(id));
    if(chakra) {
       response.status(200).json({data : chakra})
    }else{
      return response.status(404).json({error : `Can't find chakra with id ${id}`})
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});




// chakras.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const chakra = await getChakra(id);
//     if (chakra.id) {
//       res.json({ payload: chakra, success: true });
//     } else {
//       res.status(404).json({
//         payload: "not found",
//         success: false,
//         error: "chakra not found line 31 chakrasController",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



chakras.post("/", async (request, response) => {
  try {
    const student = request.body;
    if(!validateChakraParams(chakras, response)){
      return
    }
    const createdChakra = await createChakra(chakras);
    response.status(201).json({ data: createdChakra });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

// chakras.post("/", async (req, res) => {
//   const { body } = req;

//   body.id = body;

//   try {
//     const createdChakra = await createChakra(body.payload);
//     if (createdChakra.id) {
//       res.status(200).json({
//         success: true,
//         payload: createdChakra,
//       });
//     } else {
//       res.status(422).json({
//         success: false,
//         payload: "Must include type field line 52 chakrasController",
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });



chakras.put("/:id", async (request, response) => {
  try{
    const { id } = request.params;
    if(!validateId(id, response)){
      return 
    }
    const student = request.body;
    if(!validateChakraParams(chakras,response)) {
      return 
    }
    const updateChakra = await updateChakra(Number(id))
    if(!updateChakra) {
      return response.status(404).json({error : `Can not find chakra with id ${id}`})
    }
    const updatedChakra= await updateChakra(Number(id),student)
    response.status(200).json({data : updatedChakra})
  }catch (err){
    response.status(500).json({error : err.message})
  }
})

// chakras.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { body } = req;

//     body.id = body;

//     const updatedChakra = await updateChakra(req.body, id);
//     console.log(updatedChakra);
//     if (updatedChakra.id) {
//       res.status(200).json(updatedChakra);
//     } else {
//       res
//         .status(404)
//         .json({ error: "chakra not found line 72 chakrasController" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


chakras.delete("/:id", validateId, async (request, response) => {
  try {
  const { id } = request.params;
    if(!validateId(id, response)){
      return 
    }
    const updateChakra = await updateChakra(Number(id))
    if(!updateChakra) {
      return response.status(404).json({error : `Can not find chakra with id ${id}`})
    }
    
    const deletedChakra = await deleteStudent(Number(id));
    response.status(200).json({ data: deletedChakra });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});


// chakras.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedChakra = await deleteChakra(id);
//     if (deletedChakra.id) {
//       res.status(200).json({ payload: deletedChakra, success: true });
//     } else {
//       res.status(404).json({
//         payload: "chakra not found line 83 chakrasCoontroller",
//         success: false,
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = chakras;
