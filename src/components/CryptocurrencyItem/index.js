import './index.css'

const CryptocurrencyItem = props => {
  const {currencyList} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyList

  return (
    <li className="currency-item-cointype-container">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-image" />
        <p className="currency-item-cointype-heading">{currencyName}</p>
      </div>
      <div className="currency-item-usd-euro-container">
        <p className="currency-item-cointype-heading">{usdValue}</p>
        <p className="currency-item-cointype-heading">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
