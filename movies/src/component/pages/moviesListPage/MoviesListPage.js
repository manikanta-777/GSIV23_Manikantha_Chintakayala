import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { MoviesListTemplate } from '../../templates/moviesListTemplate/MoviesListTemplate'
import { moviesListAction } from '../../../redux/actions/moviesListAction'

export const MoviesListPage = () => {
    const dispatch=useDispatch()
    const {moviesData}= useSelector((state)=>state.moviesList)
    console.log("movies lis page",moviesData)
    useEffect(()=>{
        dispatch(moviesListAction())
    },[dispatch])
    return (
        <div>MoviesListPage
        <MoviesListTemplate/>
        {
            moviesData?.map((movie,index)=>
         
        <div>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.id}  width="200" height="300" key={index}/>
            
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}`} alt={movie.id}  width="200" height="300" key={index}/>
            </div>
          )
        }
    </div>
  )
}
