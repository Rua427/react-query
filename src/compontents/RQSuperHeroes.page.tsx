import { useSuperHeroesData } from '../hooks/useSuperHeroeseData'

const RQSuperHeroesPage = () => {

  const onSuccess = (data: Array<any>) :void => {
    console.log('Perform side effect after data fecthing.', data)
  }

  const onError = (error: Error) => {
    console.log('Perform side effect after encounting fecthing.', error)
  }
  // refetch 함수를 호출할때만 패치를 한다.
  const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeroesData(onSuccess, onError)
  

  console.log({isLoading, isFetching})

  if (isLoading || isFetching){
    return <h2>Loading ...</h2>
  }

  if (isError){
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <h2>React Query Super Heroes Page</h2>
    {/* <button onClick={() => {refetch()}}>Fetch heroes</button> */}
    {
      data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })
    }
    </>
  )
}
  
  export default RQSuperHeroesPage