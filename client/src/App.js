import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import Form from './components/Form';
import Wallet from './components/Wallet';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const  connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask Here!');
         window.ethereum.request({ method: 'eth_requestAccounts' })
      
        .then(result => {
          accountChangedHandler(result[0]);
          getAccountBalance(result[0]);
        })
        .catch(error => {
          setErrorMessage(error.message);

        });

    } else {
      console.log('Need to install MetaMask');
      setErrorMessage('Please install MetaMask browser extension to interact');
    }
  }

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());

  }

  const  getAccountBalance = (account) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then( balance => {
         setUserBalance(ethers.utils.formatEther(balance));

      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };
  
  

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
    window.location.href = "/"
  }

  // listen for account changes
  window.ethereum.on('accountsChanged', accountChangedHandler);



  return (
    <Router>
      
      <div className='App' >
      <div className='Navbar-conteiner'>
            <div className="logoArea">
                <img src={logo} alt='logo.png' width="150px"></img>
            </div>
            <div className='Rightbar'>
                <ul>
                    <li><a href='http://www.google.com' rel="noreferrer" target="_blank">Google </a></li>
                    <li><a href='https://metamask.io/' rel="noreferrer" target='_blank'>Metamask</a> </li>
                </ul>
            </div>

            <div className='key'>
                {errorMessage === true ? <h1>{errorMessage}</h1> :
                    <h3 className='user'>
                        Adress : {defaultAccount} <br></br>
                        Ballance : {userBalance}
                    </h3>}
            </div>
        </div>
        <Routes>
          <Route path="/" element={
            <div style={parseFloat(userBalance) === 0.0 ? {display:"none"}  : {display:"block"}}>  <Main
              erormessage={errorMessage}
              defaultAccount={defaultAccount}
              userBalance={userBalance}
              connectWalletHandler={connectWalletHandler}
              chainChangedHandler={chainChangedHandler}
            />
            </div>
          }>
         </Route>
        </Routes>
        
        {parseFloat(userBalance) === 0.0 ? <Wallet/> : null}
        <Routes>
        <Route path="/walletAddres" element={  
          <div>
            <Wallet
            defaultAccount={defaultAccount}
            userBalance={userBalance}
          />
          </div>
        }>
        </Route>
        </Routes>
    
        {parseInt(userBalance)>1 ? <Form/> : null}
        <Routes>
        <Route path="/Form" element={
          <Form
            defaultAccount={defaultAccount}
            userBalance={userBalance}
          />

        }></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
