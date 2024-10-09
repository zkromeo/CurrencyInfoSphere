# CurrencyInfoSphere

Welcome to the **CurrencyInfoSphere** package! This package provides comprehensive information about countries, including their names, currencies, symbols, common names of money, and more.

## Features

- Access detailed information about countries worldwide.
- Retrieve currency details such as names, symbols, and codes.
- Easy-to-use API for developers to integrate country and currency data into their applications.
- Additional country information, including common names of currencies.

## Installation

To install the CurrencyInfoSphere package, run the following command in your terminal:

```bash
npm install CurrencyInfoSphere

## Usage

Once you have installed the **CurrencyInfoSphere** package, you can import it into your project like so:

```javascript
import countries from "CurrencyInfoSphere/allCountriesDetail.json";

// Example: Logging country names
countries.forEach(country => {
   console.log(country.name);
});
