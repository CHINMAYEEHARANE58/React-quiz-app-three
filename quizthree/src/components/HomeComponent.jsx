import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HomeComponent extends Component {
  render() {
    return (
      <>
        <div className='Home'>
          <h1 className='heading'>Quiz App</h1>
          <Link to="/quiz">
          <button className='play'>Play</button>
          </Link>
        </div>
      </>
    )
  }
}