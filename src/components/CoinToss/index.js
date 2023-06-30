import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {totalCount: 0, headsCount: 0, tailsCount: 0, isTails: false}

  changeStatus = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => {
      console.log(`total count:${prevState.totalCount}`)
      return {totalCount: prevState.totalCount + 1}
    })
    if (tossResult === 0) {
      this.setState(prevStat => {
        console.log(`total count:${prevStat.totalCount}`)
        return {headsCount: prevStat.headsCount + 1}
      })
    } else {
      this.setState(prevState => {
        console.log(`total count:${prevState.totalCount}`)
        return {tailsCount: prevState.tailsCount + 1}
      })
      this.setState(prevState => {
        console.log(`prevState ${prevState.isTails}`)
        return {isTails: !prevState.isTails}
      })
    }
  }

  changeImage = () => {
    const {isTails} = this.state
    if (isTails === true) {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="image"
        />
      )
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
        alt="toss result"
        className="image"
      />
    )
  }

  render() {
    const {totalCount, headsCount, tailsCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {this.changeImage()}
          <button type="button" onClick={this.changeStatus} className="button">
            Toss Coin
          </button>
          <div className="card-items-container">
            <p className="card-item">Total: {totalCount}</p>
            <p className="card-item">Heads: {headsCount}</p>
            <p className="card-item">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
