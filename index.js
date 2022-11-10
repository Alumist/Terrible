const {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const wallet_address = new PublicKey;

///const testKey = new PublicKey('At4HMuPZGZxayk9mmChN4edj3BZs37jnASo7MqLtszZt')

const userWallet = async () => {
        try {
            const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed')
            const walletBalance = await connection.getBalance(wallet_address)
            //console.log(walletBalance)
        }catch (error){
            console.log(error)
        }
    };