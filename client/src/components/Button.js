import React from 'react';
const btnStyle = {
    width : "200px",
    height : "100px",
    fontSize: "2rem",
    color: "white",
    background:"#53a653",
    border :"none",
    marginRight :"1rem",
    borderRadius:"16px"

}

const btnDis = { 
    width : "200px",
    height : "100px",
    fontSize: "2rem",
    color: "white",
    background:"red",
    border :"none",
    borderRadius:"16px"
}
function Button({connect}) {
    return ( 
        <div className='Button-conteiner' style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <button style={btnStyle}>Connected</button>
            <button style={btnDis}>Disconnet</button>
        </div>
     );
}

export default Button;