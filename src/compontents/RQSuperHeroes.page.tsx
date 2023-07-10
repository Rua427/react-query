import {useQuery} from 'react-query'
import axios from 'axios'
import '../../db'
import { SuperHeroesDB } from '../../db'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes').then(response => response.data)
}

const RQSuperHeroesPage = () => {
  // refetch 함수를 호출할때만 패치를 한다.
  const {isLoading, data, isError, error, isFetching, refetch} = useQuery<SuperHeroesDB[], Error>(
    'super-heroes',  
    fetchSuperHeroes,
    {
      // 컴포넌트 활성화할때 패치
      refetchOnMount:false,
      // 브라우저 마우스 포커싱 될때 패치
      refetchOnWindowFocus:true,
      //일정시간마다 패치 ms
      //refetchInterval: 2000,
      // 일정시간마다 패치 백그라운드에서도 동작 ... 안하는데?
      //refetchIntervalInBackground:true,

      // 패치 안함
      enabled:false,
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
    <button onClick={() => {refetch()}}>Fetch heroes</button>
    {
      data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })
    }
    </>
  )
}
  
  export default RQSuperHeroesPage