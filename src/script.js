const contractAddress = "0xFA30ae7325cd8656A533B3A9f65dbdB3587b23fe";

const contractAbi = [{
        "inputs": [{
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_buyPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_sellPrice",
                "type": "uint256"
            }
        ],
        "name": "addStock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_index",
            "type": "uint256"
        }],
        "name": "getUserStock",
        "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUserStocksCount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userStocks",
        "outputs": [{
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "buyPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "sellPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalValue",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];


let provider;
let signer;
let contract;

async function connect() {
    if (window.ethereum) {
        try {
            // Request account access if needed
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(`Connected account: ${accounts[0]}`);
            // Initialize ethers provider and signer
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            // Create a connection to the smart contract
            contract = new ethers.Contract(contractAddress, contractAbi, signer);
            alert('Wallet connected');
        } catch (error) {
            console.error(error);
            alert('Failed to connect wallet');
        }
    } else {
        alert('No wallet found');
    }
}



const stocksList = document.getElementById('stocksList');

async function addStock() {
    const stockName = document.getElementById('stockName').value;
    const buyPrice = parseFloat(document.getElementById('buyPrice').value);
    const sellPrice = parseFloat(document.getElementById('sellPrice').value);
    const totalValue = buyPrice + sellPrice;

    const tx = await contract.addStock(stockName, buyPrice, sellPrice);
    tx.wait();
    const stockItem = document.createElement('div');
    stockItem.classList.add('stock-item');
    stockItem.innerHTML = `<p><strong>Stock Name:</strong> ${stockName}</p>
                           <p><strong>Buy Price:</strong> ${buyPrice}</p>
                           <p><strong>Sell Price:</strong> ${sellPrice}</p>
                           <p><strong>Total Value:</strong> ${totalValue}</p>`;

    stocksList.appendChild(stockItem);
}

async function getUserStocksCount() {
    const value = await contract.getUserStocksCount();
    console.log(parseInt(value));

}