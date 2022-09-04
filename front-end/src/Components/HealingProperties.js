import React from 'react'

function HealingProperties({krystal, props}) {

    const {name, category, id, image} = krystal
    const {value} = props
if(category === value){
    return name && image
}else{
    return "Choose A Healing Property"
}

  return (
    <div>
            <h2>{krystal.name}</h2>
            <img src={krystal.image} alt={krystal.name}></img>
    </div>
  )
}

export default HealingProperties