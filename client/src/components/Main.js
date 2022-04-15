import React from 'react';
const btnStyle = {
    width: "200px",
    height: "60px",
    fontSize: "2rem",
    color: "white",
    background: "#53a653",
    border: "none",
    marginRight: "1rem",
    borderRadius: "16px",
    marginLeft: "1rem"

}
const btnDis = {
    width: "200px",
    height: "60px",
    fontSize: "2rem",
    color: "white",
    background: "red",
    border: "none",
    borderRadius: "16px"
}


function Main(props) {
    

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome</h1>
           
            <div className="conteiner">
                <div className='btnArea'>
                    <button style={btnStyle} onClick={props.connectWalletHandler}>Connect</button>
                    <button style={btnDis} onClick={props.chainChangedHandler}>Disconnect</button>
                    
                </div>
            </div>

        </div>
    );
}

export default Main;