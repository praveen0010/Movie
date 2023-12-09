import React from 'react'
import {useState,useEffect} from 'react'
import Image from './Image'
import Error from './Error'
import Cardbody from './Cardbody'
const Movieitem = ({likes,language,release_date,url,title,overview,movie_id,api_key,m_ids}) => {
const m_url='https://image.tmdb.org/t/p/w500'
const trailer='https://www.youtube.com/watch?v='
const n_url=`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api_key}`
const[like,setLike]=useState(likes || 1)
const[des,setDes]=useState(false)
const [video_key,setVideo_key]=useState('')
const[c,setC]=useState(0)
    function increase(e){
        setC(1)
                if(c===0){
                    setLike(parseInt(e.target.value)+1)
                }                          
           }  
    function decrease(e){
        setC(0)
        if(c>0){
            setLike(parseInt(e.target.value)-1)
        }
               
    }
    useEffect(() => {
        async function video(){
            try {
            const video=await fetch(n_url)
            if(!video.ok) throw new Error('error:check the url') 
            const video_j=await video.json()
            setVideo_key(video_j.results[0].key || 'xY-qRGC6Yu0')
            } catch (error) {
                
                console.log(error.message);
            }
        }video()
    }, [n_url])

return (
    
        <div className="card mb-5 mt-4   d-inline-block my-2 mx-2 px-2 py-2" style={{width: '18rem',height:"100px"}}>
            < Image m_url={m_url} url={url}/>
            <Cardbody release_date={release_date} title={title} language={language} like={like} overview={overview} des={des} setDes={setDes}  increase={increase} decrease={decrease}/>
            <a style={{display:"block"}} href={`${trailer}${video_key}`} className="btn btn-primary">Watch Trailer</a>
        </div> 
    
)
}

export default Movieitem
