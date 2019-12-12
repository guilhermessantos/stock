# Stock
Simple control for allocation in investments.

## Usage API
Usage the free api for global quote search [Alpha Vantage](https://www.alphavantage.co/)

`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo`

```json
{
  "Global Quote": {
    "01. symbol": "MSFT",
    "02. open": "151.5400",
    "03. high": "151.8700",
    "04. low": "150.3300",
    "05. price": "151.7000",
    "06. volume": "18321420",
    "07. latest trading day": "2019-12-11",
    "08. previous close": "151.1300",
    "09. change": "0.5700",
    "10. change percent": "0.3772%"
  }
}
```

## Currently using:

- [React](https://reactjs.org)
- [Styled Components](https://www.styled-components.com/)
