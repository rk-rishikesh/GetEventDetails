// node index.js

var Web3 = require('web3');

const init = async () => {
    const web3 = new Web3("https://polygon-mainnet.g.alchemy.com/v2/S5D0G36hnrJXfk7-RW2t579v2OGVjFml");
    console.log("===== TRANSFER EVENT DETAILS =====");
    web3.eth.getPastLogs({
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
        topics: ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]
    })
    .then(console.log);
}

init();