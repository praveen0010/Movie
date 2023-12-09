import React from 'react'
import {useEffect, useState} from 'react'
import Movieitem from './Movieitem'
import Pages from './Pages'
import Error from './Error'
const Moviebord = ({search,genere_id,genere}) => {
    //const m_url='https://image.tmdb.org/t/p/w500'
    //const movie_gen=genere_id||18
    const [page,setPage]=useState(1)
    const [error,setError]=useState(null)
    const[movies,setMovies]=useState([ ])
    const[mids,setMids]=useState([])
    const api_key='c6423f3bc4b198dd6a29b9a88238b186'
    const url=`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&with_genres=${genere_id}&page=${page}`
  
    function setPreviouspage(){
            page>1?setPage(page-1):setPage(1)
    }
    function setNextpage(){
            setPage(page+1)
    }
    useEffect(() => {
        const fetchmovie=async ()=>{
            try {
                const res= await fetch(`${url}`)
                if(!res.ok) throw new Error('url mistake check the url')
                const data=await res.json()
                setMovies(data.results)
                //console.log(data.results[0]);
                const mid=await data.results.map((m)=>{
                        return m.id
                })
                setMids(mid)
            } catch (error) {
                setError(error.message)
                //console.log('err',error); 
            }
        }
        fetchmovie()
    },[url])
   
    return (
    <div style={{margin:'50px 0px 5px 0px'}}>
            {error?<Error error={error}/>: movies ? (movies.filter((movie)=>{return movie.title.toUpperCase().includes(search.toUpperCase())}).map((movie,i)=>{
                return <Movieitem  likes={movie.vote_count} language={movie.original_language} release_date={movie.release_date} m_ids={mids} key={i} api_key={api_key} movie_id={movie.id} url={movie.poster_path} overview={movie.overview} title={movie.title}/>
            })):null}
            {!error?<Pages setPreviouspage={setPreviouspage} setNextpage={setNextpage} page={page}/>:null}
    </div>
    
    )
}

export default Moviebord
