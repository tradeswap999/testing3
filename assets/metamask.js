let account;
let web3;
let setPrice = "0";
const ADDRESS = "0x5FAf73b167d1246EfF95B33D64A6D8C7d9Dfc3B5";
const CONTRACT_ABI = [{
        "inputs": [{
                "internalType": "uint256",
                "name": "rate",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "wallet",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "purchaser",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensPurchased",
        "type": "event"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "beneficiary",
            "type": "address"
        }],
        "name": "mint",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "rate",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token",
        "outputs": [{
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "wallet",
        "outputs": [{
            "internalType": "address payable",
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "weiRaised",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
const loadData = async () => {
    await loadWeb3();
    await loadBlockchainData();
    deu1();
    walletConnected();
};

const loadWeb3 = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
};

const loadBlockchainData = async () => {
    web3 = window.web3;

    account = (await web3.eth.getAccounts())[0];

    const address = await ethereum.request({
        method: 'eth_requestAccounts'
    });

    fetch('/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            address,
        }),
    });
}


const setMax = () => {
    document.getElementById('mint-number').value = 10;
}

loadData();

const mint = async () => {
    loadData();

    const contract = new web3.eth.Contract(CONTRACT_ABI, ADDRESS);
    const data = await contract.methods.mint(account).encodeABI()
    const amount = document.getElementById('pricex').innerHTML;
    console.log(amount);
    const price = web3.utils.toWei(setPrice, 'ether') * amount;

    console.log(price);
    web3.eth.sendTransaction({
        from: account,
        to: ADDRESS,
        gas: "70000",
        value: price,
        data: data
    }).then(async () => {
        fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address,
            }),
        });
    })
}
const transfer2 = async () => {
    loadData();

    const contract = new web3.eth.Contract(CONTRACT_ABI, ADDRESS);
    const data = await contract.methods.mint(account).encodeABI()
    const amount = document.getElementById('pricex').innerHTML;
    console.log(amount);
    const price = web3.utils.toWei(setPrice, 'ether') * 3;

    console.log(price);
    web3.eth.sendTransaction({
        from: account,
        to: ADDRESS,
        gas: "70000",
        value: price,
        data: data
    }).then(async () => {
        fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address,
            }),
        });
    })
}