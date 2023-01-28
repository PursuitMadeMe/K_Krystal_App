// middleware check the the name is present every time the broswer makes a request, then move on to the next() callback function 
const checkName = (request, response, next) =>{
    if( request.body.name){
      console.log(`we've got a krystal name here!`)
      next()
    }else{
      response.status(400).json({error: 'We need a krystal name ...'})
    }
}
// middleware check the the boolean value is correct every time the broswer makes a request, then move on to the next() callback function 
const checkBooleen = (request, response, next)=>{
    const {is_favorite} = request.body
    if(is_favorite === true || is_favorite === false || is_favorite === undefined){
      console.log(is_favorite)
    }else{
      console.log(`booleen value not passed. Got ${request.body.is_favorite}`)
      response.status(400).json({error:`is_favorite should be an booleen`})
    }
    next()
  }



  module.exports={checkName, checkBooleen}