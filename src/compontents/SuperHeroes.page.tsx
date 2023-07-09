import { useState, useEffect } from 'react'
import axios from 'axios'
import { InitSuperHeroesDB } from '../../db'

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(InitSuperHeroesDB)


  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Super Heroes Page</h2>
      {
        data.map(hero => {
          return <div>{hero.name}</div>
        })
      }
    </div>
  )
}
  
export default SuperHeroesPage