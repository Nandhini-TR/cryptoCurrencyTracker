import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyItem: [], isLoading: true}

  componentDidMount() {
    this.getcurrencyItemList()
  }

  getcurrencyItemList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({currencyItem: formattedData, isLoading: false})
  }

  renderCryptocurrencyItem = () => {
    const {currencyItem} = this.state
    return (
      <div className="currency-list-container">
        <h1 className="crypto-currency-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="coin-container">
          <div className="cointype-container">
            <h1 className="cointype-heading">Coin Type</h1>
            <div className="usd-euro-container">
              <h1 className="cointype-heading">USD</h1>
              <h1 className="cointype-heading">EURO</h1>
            </div>
          </div>
          <ul className="ul-list">
            {currencyItem.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} currencyList={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="cryptocurrency-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrencyItem()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
