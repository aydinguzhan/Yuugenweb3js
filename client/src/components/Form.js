import React from 'react';
import { useState } from 'react';
import '../App.css';


function Form(props) {
    const [name, setName] = useState({})
    
    return (

        <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Sign up for Yuugene</h1>
            </div>
            <div className='Dashboard'>
                <form className='form'>
                    <input type="text" placeholder='@email'></input>
                    <input type="text" defaultValue="" onChange={(e) => setName(e.target.value)} placeholder=' Full Name' required></input>
                    <input type="date"></input>
                    <input type="number" placeholder='Wallet adress'></input>
                    <button type='submit' on onClick={() => alert(`${name} welcome to Yuugen App`)}>Add Coin</button>
                </form>
            </div>
        </div>
    );
}

export default Form;