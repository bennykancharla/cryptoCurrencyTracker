// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = itemDetails
  return (
    <li className="currency-item-container">
      <div className="currency-name-container">
        <img className="crypto-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currencies-value-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
