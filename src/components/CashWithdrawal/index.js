import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state: {Balance: 2000}

  denomination = value => {
    this.setState(prevState => ({
      Balance: prevState.Balance - value,
    }))
  }

  render() {
    const {Balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg">
        <div className="bg-container">
          <div className="profile">
            <h1 className="heading">s</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="Balance">
            <h1>Balance</h1>
            <div>
              <p>{Balance}</p>
              <p>in rupees</p>
            </div>
            <h1>Withdraw</h1>
            <p>Choose Sum in Rupees</p>
            <ul className="buttonContainer">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  Details={eachItem}
                  key={eachItem.uniqueNo}
                  denominate={this.denomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
