import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'
import Homepage from './compontents/Home.page'
import SuperHeroesPage from './compontents/SuperHeroes.page'
import RQSuperHeroesPage from './compontents/RQSuperHeroes.page'

const App = () => {
  const name = 'Vishwas'
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeroesPage />}/>
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />}/>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
