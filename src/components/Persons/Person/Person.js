import React from 'react';
import './Person.css';

const person = ({name,age,clickDelete,changeName,children})=>{
    return <div className = 'person' >
       <p onClick = {clickDelete}> I am {name}! I am {age} years old.</p>
        <p>{children}</p>
        <input type='text' value={name} onChange = {changeName} />
        </div>
}
export default person; 