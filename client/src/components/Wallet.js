import React from "react";



const btnStyle = {
    width: "150px",
    height: "50px",
    fontSize: "1.5rem",
    color: "white",
    background: "#53a653",
    border: "none",
    marginTop: "2rem",
    borderRadius: "16px",
    marginLeft: "1rem"

}


function Wallet() {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    with: "100vw",
                }}>
                </div>

                <input style={{
                    width: "20%",
                    height: "50px",
                    marginTop: "5rem",
                    border: "1px solid #53a653",
                    textAlign: "center",
                    fontSize: "2.5rem"
                }} type="number" name="Coin" defaultValue="0" />
                <button style={btnStyle} type="submit">+Add</button>
               
            </div>

        </>
    );

}

export default Wallet;