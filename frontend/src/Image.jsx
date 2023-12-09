import React from 'react'

const Image = ({m_url,url}) => {
    return (
        
            <img src={`${m_url}${url}`} style={{height:'300px',width:'270px'}} className="card-img-top" alt="movie_poster"/>
        
    )
}

export default Image
