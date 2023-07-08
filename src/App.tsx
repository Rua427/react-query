import React from 'react'
import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'

const App = () => {
  return (
    <div>
        <h1>App - {process.env.NODE_ENV} {process.env.name}</h1>
        <img src={IMAGE} alt="React Logo"  width="320" height="180"/>
        <img src={LOGO} alt="React Logo"  width="300"/>
    </div>
  )
}

export default App