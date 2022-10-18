import React from 'react'
import  './Link.css'
import Card from './Card';

const Link = ({people}) => {
    
    return ( 
        <>
       {people.map(person => {
        const {id, name,age,image} = person;
        return (
            <Card className='link' key={id} >
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{age}</p>
            </div>
            </Card>
        )
       })}
    </>
     );
     
}
 
export default Link;