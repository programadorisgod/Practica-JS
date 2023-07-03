import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greetting'
import Product from './Product'
import { Button } from './Buttons'
import { TaskCard } from './Task'
import { useState, useEffect } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));



const Counter = () => {

    let [counter, setCounter] = useState(0);
  
    
    return <div>

        <h1>Counter: {counter}</h1>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>Sumar</button>

        <button onClick={() => {
            setCounter(counter - 1)
        }}>Restar</button>


        <button onClick={() => {
            setCounter(0)
        }}>Reiniciar</button>

    </div>
}


const Input = () => {
    const [mensaje, setMensaje] = useState('')
   
    
    return <div>
        <input onChange={e => setMensaje(e.target.value)}/>
        <button>Save</button>
    </div>
}



root.render(<>

    {/*<Counter/>*/}
    <Input />

    {/* <TaskCard ready={true} />*/}
    {/* 
    <Button text="JavaScript" name="hola" />
    <Button text="JSX" />
    <Button text="REACT" />
    <Button text="Node.js" /> */}


    {/* <UserCard name="Ryan Castro"
        amount={3000} married={true}
        points={[99, 33.3, 22.2]}
        address={{
            street: '123 uwu',
            city: 'New York'
        }} /> */}
</>)