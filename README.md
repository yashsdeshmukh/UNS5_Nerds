### UNS5_Nerds
## Dependencies
Install these prerequisites to follow along with the tutorial. See free video tutorial or a full explanation of each prerequisite.
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle (CLI)
- Ganache: http://truffleframework.com/ganache/ (Dummy blockchain for dev purpose)
- Metamask: https://metamask.io/ (Browser extension)


## Step 1. Clone the project
`git clone https://github.com/yashsdeshmukh/<NameOfRepo>`

## Step 2. Install dependencies
```
cd into the directory of the project and 
`$ npm install`
```
## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.
To avoid hassle, it is recommended to create a workspace and keep using the same for dev purpose instead of creating new ones everytime

## Step 4. Compile & Deploy Smart Contract
`$ truffle compile`
`$ truffle migrate`
IMPORTANT - You must migrate the smart contract each time your restart ganache.`

## Step 5. Configure Metamask browoser extension
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
`$ node app.js`
Visit this URL in your browser: http://localhost:8080
