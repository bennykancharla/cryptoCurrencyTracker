// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoaded: false}

  componentDidMount() {
    this.getCurrencies()
  }

  getCurrencies = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converter'
    const data = await fetch(url)
    const response = await data.json()
    // console.log(response)
    const updatedList = response.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    // console.log(updatedList)
    this.setState({cryptoList: updatedList, isLoaded: true})
  }

  render() {
    const {cryptoList, isLoaded} = this.state
    return (
      <div className="crypto-container">
        <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
        <img
          className="crypto-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="currency-main-container">
          <div className="currency-header-container">
            <h3 className="currency-heading">Coin Type</h3>
            <div className="currencies-container">
              <h3 className="currency-heading currency">USD</h3>
              <h3 className="currency-heading currency">EURO</h3>
            </div>
          </div>
          <ul className="currency-list">
            {isLoaded ? (
              cryptoList.map(each => (
                <CryptocurrencyItem key={each.id} itemDetails={each} />
              ))
            ) : (
              <div className="loader" data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
