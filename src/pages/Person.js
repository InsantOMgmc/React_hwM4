import React from 'react'

const PersonInfo = (props) => {
  return (
     <div>
        <h1>{props.name}</h1>
        <h3>{props.phone}</h3>
        <h3>{props.email}</h3>
        <h3>{props.city}</h3>                
     </div>
  )
}

export default function Person() {
  return (
    <PersonInfo name='Нургазы Талгат' phone='87474188497' email='anurbbekov2@gmail.com'city='Astana'/>
  )
}
