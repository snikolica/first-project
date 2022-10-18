import React, {useState} from 'react';
import './index.css';
import data from './data'
import Link from './Link';
import Card from './Card';
import Button from './Button';


function App() {
  const [people, setPeople] = useState(data)
  const otvori = () =>{
    setPeople([])
  }
  return (
    <Card className='container' >
     <h2>{people.length ? people.length + ' birthday' : 'empty'}</h2>
     <Link people={people}/>
     
     {people.length ? <Button className='btn' onClick={otvori}>clear all</Button> : ''}
     
      </Card>
    
  );
}

export default App;
