# Commands:

```cmd
cd ./web3/ef-pila-coin-erc20-hardhat
npm init -y
npm i hardhat@2
npx hardhat init

npm run compile
npm run test
```

```cmd
cd ./web3/ef-pila-coin-erc20-hardhat

npx hardhat console

const contract = await ethers.getContractAt("PilaCoin", "0x5FbDB2315678afecb367f032d93F642f64180aa3")
contract.approve("0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 1n * 10n ** 18n)

const [owner, otherAccount] = await ethers.getSigners();
const contractInstance = contract.connect(otherAccount);
await contractInstance.transferFrom("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 1n * 10n ** 18n)
```

```cmd
cd ./web3/ef-pila-coin-erc20-hardhat

npm i dotenv
npm i -D @nomiclabs/hardhat-etherscan

npm run deploy:prod
npx hardhat verify --network sepolia 0x09231A8EB608A84f62A2052972A401014cD0b37F
```

```cmd

```

```cmd

```

```cmd

```

```cmd

```

```cmd

```

```cmd

```

```cmd

```
