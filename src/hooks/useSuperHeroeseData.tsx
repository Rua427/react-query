import {useQuery} from 'react-query'
import axios from 'axios'
import { SuperHeroesDB } from '../../db'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes').then(response => response.data)
}

export const useSuperHeroesData = (onSuccess: (data: SuperHeroesDB[]) => void, onError: (error : Error) => void) => {
    return useQuery<SuperHeroesDB[], Error>(
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
          //enabled:false,
          // fetch 성공시 callback
          onSuccess,
          // fetch 실패 시 callback
          onError,
          // 데이터 타입을 변환하는거같은데 ts에서는 딱히 필요없는듯
          // select: (data) =>{
          //   const superHeroesNames = data.map<SuperHeroesDB[]>(hero=> hero.name)
          //   return superHeroesNames;
          // }
        }
    )
}