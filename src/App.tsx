import React from 'react'
import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import ClickCounter from './ClickCounter'

const App = () => {
  return (
    <div>
        <h1>eidted - {process.env.NODE_ENV} {process.env.name}</h1>
        <img src={IMAGE} alt="React Logo"  width="320" height="180"/>
        <img src={LOGO} alt="React Logo"  width="300"/>
        <ClickCounter/>
    </div>
  )
}

export default App