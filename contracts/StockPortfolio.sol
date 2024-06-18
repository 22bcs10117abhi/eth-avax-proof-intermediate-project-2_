// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StockPortfolio {
    struct Stock {
        string name;
        uint buyPrice;
        uint sellPrice;
        uint totalValue;
    }

    mapping(address => Stock[]) public userStocks;

    function addStock(string memory _name, uint _buyPrice, uint _sellPrice) public {
        Stock memory newStock = Stock(_name, _buyPrice, _sellPrice, _buyPrice + _sellPrice);
        userStocks[msg.sender].push(newStock);
    }

    function getUserStocksCount() public view returns (uint) {
        return userStocks[msg.sender].length;
    }

    function getUserStock(uint _index) public view returns (string memory, uint, uint, uint) {
        Stock storage userStock = userStocks[msg.sender][_index];
        return (userStock.name, userStock.buyPrice, userStock.sellPrice, userStock.totalValue);
    }
}