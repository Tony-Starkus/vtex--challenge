# VTEX Challenge

This repo is used to save the code about vtex challenge. This challenge is a code to show a shopping card, with list of product names, prices, the final price and a button to finishe the order.

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

First, on `App.tsx`, change the `productsData` variable with the values `listOne` or `listTwo` to load 2 diferent list of products.

```
import listOne from './mock/products-list-one.json';
import listTwo from './mock/products-list-two.json';

const productsData = listOne;
```
Second, run the following command to install the project dependencies

```
$ yarn install
```

Finally, run the project:
```
$ yarn start
```
