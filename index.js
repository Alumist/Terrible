const PORT = 8000;
const express = require('express')

const app = express();
const solanaWeb3 = require('@solana/web3.js');
console.log(solanaWeb3);


const =
    {getWalletBalance
    
    
    
    
    } require = 



//api url
app.get('/', (req, res) => {

}) 

app.get(`/get_wallet_balance/:address`, async (req, res) => {
    res.send(await solanaWeb3(getWalletBalance(address)));
  });
  
  async function getWalletBalance(address) {
    // the solana portion, you got this ᕦ( ͡° ͜ʖ ͡°)ᕤ
  }