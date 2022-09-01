import React from 'react'

function Home() {
    const options = [
        {
          label: 'Anxiety',
          value: 'anxiety',
      
        },
        {
          label: 'Motivation',
          value: 'motivation',
      
        },
        {
          label: 'Study',
          value: 'study',
      
        },
        {
          label: 'Love',
          value: 'love',
      
        },
        {
          label: 'Stress',
          value: 'stress',
      
        },
        {
          label: 'Happiness',
          value: 'happiness',
      
        },
        {
          label: 'Prosperity',
          value: 'prosperity',
      
        },
        {
          label: 'Manifestation',
          value: 'manifestation',
      
        }
    ]
  return (
    <div>
        <h1>Kim's Crystal Healing App</h1>
        <h2> today?</h2>
        <select><options>What do you need help with?</options></select>
    </div>
  )
}

export default Home