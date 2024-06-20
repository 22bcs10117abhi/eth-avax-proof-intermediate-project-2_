# Stock Portfolio 
This is a Solidity contract for managing a stock portfolio. It allows users to add stocks to their portfolio and view the details of their stocks.


Key Features:

    >>Adding Stocks: Users can add new stocks to their portfolio by providing the stock name, buy price, and sell price.
    >>Viewing Stocks: Users can view the details of their stocks, including the stock name, buy price, sell price, and total value.
    >>Stock Portfolio Management: The contract stores the user's stocks in a mapping, allowing for efficient management and retrieval of stock information.


# Description

This Solidity contract, named StockPortfolio, manages a user's stock portfolio by allowing them to add and view their stocks. The contract includes the following features:

Functions:

    addStock: Adds a new stock to the user's portfolio.
    getUserStocksCount: Returns the number of stocks in the user's portfolio.
    getUserStock: Returns the details of a specific stock in the user's portfolio.

# Getting Started

# Executing program

To run this program, First create a directory , switch to that directory and open it in vs code.

        Run npm i, this will install the dependencies. run npx hardhat node this will create a local blockchain. from the provided private keys copy anyone and import in metamask. open new terminal and run npx hardhat run --network localhost scripts/deploy.js . This will compile and deploy the contract on hardhat node. contract address will be printed in the terminal, copy and paste that address in contractAddress value in src\script.js file. naviage to ../artifacts/contracts/MessageSystem.sol/MessageSystem.json file and copy the abi address which looks like :

    "abi": [
      {.....}
     ]

        paste this for the value of contractABI. Now open index.html. in metamask set network to localhost. click connect wallet now you can interact with UI add/remove member as hod/faculity, send messages. And at last can check the designation of member in integer form(in console) by providing its address.



## Authors

Abhishek Kumar  
[@Abhishek](https://www.linkedin.com/in/abhishek-kumar-75273024b/)


## License

This MyToken is licensed under the MIT License 
