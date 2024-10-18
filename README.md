# currency-info-sphere

## Demo Video

Check out the demo video for a quick overview of how to use the `currency-info-sphere` package and its features:

[Watch the Demo Video](https://raw.githubusercontent.com/zkromeo/CurrencyInfoSphere/master/public/demo-video.mp4)

<video controls>
  <source src="https://raw.githubusercontent.com/zkromeo/CurrencyInfoSphere/master/public/demo-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

This video will guide you through the functionalities of the package and show you practical examples of its usage.

**currency-info-sphere** is a lightweight and easy-to-use package that provides comprehensive information about different countries' currencies. It includes the official country name, common currency name, currency symbols, and ISO codes,flags making it a useful tool for developers working on internationalization, financial, or geographic-related applications.

## Features

- Access detailed country currency information
- Retrieve currency symbols and ISO codes
- Lightweight and easy-to-use API for internationalization
- Ideal for web applications that require currency data

## Support Currency Info Sphere

Currency Info Sphere is an open-source project providing real-time currency exchange data, country details, and financial tools. We're in the process of setting up our Open Collective for community support.

You can visit and follow our collective page here: [Currency Info Sphere on Open Collective](https://opencollective.com/currencyinfosphere) – *pending approval.*

Stay tuned for updates, and thank you for your interest in supporting this project!

## Installation

To install the package, use npm:

```bash
npm install currency-info-sphere


Usage

After installing the package, you can import and use the data in your project. Here's a basic example of how to access the currency information:

javascript

import { countriesCurrencyInfo } from 'currency-info-sphere';

// Example of accessing country information
console.log(countriesCurrencyInfo);

const countryInfo = countriesCurrencyInfo.find(info => info.country === 'United States');

console.log(countryInfo);
// Output:
// {
//   name: 'United States',
//   commonName: 'United States Dollar / Dollar',
//   currency: 'USD',
//   symbol: '$',
//   isoCode: 'US'
//   flag: "us"
// }
Data Structure
Each entry in the countriesCurrencyInfo array contains the following fields:

country: The official name of the country (e.g., "United States")
commonName: The common name of the currency (e.g., "United States Dollar / Dollar")
country: The currency of the country (e.g., "USD")
symbol: The currency symbol (e.g., "$")
isoCode: The ISO code of the currency (e.g., "US")
flag:The flag of the country (e.g.,"us")

```
