<h1 align="center">
    PilaCoin ERC20 Token
</h1>

<h3 align="center">
    A custom ERC20 token implementation using Hardhat
</h3>

<p align="center">
    <a href="https://github.com/efernandes-tech/web3-003-ef-pila-coin-erc20-hardhat/commits/main">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/efernandes-tech/web3-003-ef-pila-coin-erc20-hardhat">
    </a>
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/efernandes-tech/web3-003-ef-pila-coin-erc20-hardhat">
    <a href="https://edersonfernandes.com.br">
        <img alt="made by @efernandes-tech" src="https://img.shields.io/badge/Made%20by-@efernandes-tech-%2360F6AD">
    </a>
</p>

<h4 align="center">
    Status: Finished
</h4>

<p align="center">
    <a href="#about">About</a> •
    <a href="#features">Features</a> •
    <a href="#how-it-works">How it works</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#author">Author</a>
</p>

## About

PilaCoin (PLC) is a custom ERC20 token implementation built with Hardhat. This project demonstrates the implementation of a complete ERC20 token with all standard functions including transfer, approve, transferFrom, and allowance management. The token has been deployed and verified on the Sepolia testnet.

---

## Features

-   [x] ERC20 Token Implementation
-   [x] Balance and Transfer Functions
-   [x] Approve and Allowance Management
-   [x] Delegated Transfer (transferFrom)
-   [x] Deployment on Hardhat Local Network
-   [x] Deployment on Sepolia Testnet
-   [x] Smart Contract Verification on Etherscan

---

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

You will also need:
- A wallet (e.g., MetaMask)
- Sepolia testnet ETH for deployment
- An Infura or Alchemy account for RPC access
- An Etherscan API key for contract verification

#### Running the project

```bash
# Clone this repository
git clone https://github.com/efernandes-tech/web3-003-ef-pila-coin-erc20-hardhat.git

# Access the project folder
cd web3-003-ef-pila-coin-erc20-hardhat/web3/ef-pila-coin-erc20-hardhat

# Install dependencies
npm install

# Compile the smart contracts
npm run compile

# Run tests
npm run test

# Start local Hardhat network
npm run start

# Deploy to local network
npm run deploy:dev

# Deploy to Sepolia testnet
npm run deploy:prod
```

#### Environment Variables

Create a `.env` file in the `web3/ef-pila-coin-erc20-hardhat` directory:

```
INFURA_API_KEY=your_infura_api_key
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```

#### Verify Contract on Etherscan

```bash
npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
```

---

## Tech Stack

**Smart Contract:**

-   [Solidity](https://soliditylang.org/) ^0.8.20
-   [Hardhat](https://hardhat.org/)
-   [TypeScript](https://www.typescriptlang.org/)

**Blockchain:**

-   [Ethereum](https://ethereum.org/)
-   [Sepolia Testnet](https://sepolia.etherscan.io/)

**Development Tools:**

-   [Hardhat Toolbox](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox)
-   [Hardhat Etherscan](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan)
-   [dotenv](https://www.npmjs.com/package/dotenv)

**Infrastructure:**

-   [Infura](https://infura.io/) / [Alchemy](https://www.alchemy.com/)
-   [Etherscan](https://etherscan.io/)

---

## Token Details

- **Name:** PilaCoin
- **Symbol:** PLC
- **Decimals:** 18
- **Total Supply:** 1,000 PLC
- **Network:** Sepolia Testnet

## Author

<a href="https://github.com/efernandes-tech">
    <img style="border-radius: 50%;" src="https://github.com/efernandes-tech.png" width="100px;" alt="Ederson Fernandes" />
    <br />
    <sub><b>Ederson Fernandes</b></sub>
</a>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/efernandes-tech)
[![Email](https://img.shields.io/badge/Email-Contact-red?logo=gmail)](mailto:efernandes.tech@gmail.com)
