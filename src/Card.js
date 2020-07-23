import React from 'react'

export default function Card({name, image, status}) {
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Status: {status}</h3>
    </li>
  )
}