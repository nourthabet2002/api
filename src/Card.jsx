import React from 'react'

const Card = (el) => {
  return (
    <div className='card'>
      <h1>{el.name}</h1>
      <h1>{el.email}</h1>
      <h1>{el.phone}</h1>
    </div>
  )
}

export default Card
