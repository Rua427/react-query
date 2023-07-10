import {useQuery} from 'react-query'
import axios from 'axios'
import '../../db'
import { SuperHeroesDB } from '../../db'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes').then(response => response.data)
}

const RQSuperHeroesPage = () => {
  const {isLoading, data, isError, error, isFetching} = useQuery<SuperHeroesDB[], Error>(
    'super-heroes',  
    fetchSuperHeroes,
    {
      cacheTime: 5000,
    }
  )

  console.log({isLoading, isFetching})

  if (isLoading){
    return <h2>Loading ...</h2>
  }

  if (isError){
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <h2>React Query Super Heroes Page</h2>
    {
      data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })
    }
    </>
  )
}
  
  export default RQSuperHeroesPage