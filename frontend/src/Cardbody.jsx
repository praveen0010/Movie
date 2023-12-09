import React from 'react'

const Cardbody = ({release_date,title,language,like,overview,des,setDes,increase,decrease}) => {
    return (
    <div className="card-body">
        <h5 className="card-title">{title.slice(0,30)}</h5>
        <p onClick={()=>{setDes(!des)}} className="card-text">{overview?des?overview:overview.slice(0,40)+'...':'this movie had no description'}</p>
  
        <p style={{color:'black'}} className="fw-normal">Release Date :<em style={{color:'green'}} className="fst-italic ">{release_date}</em></p>
  
        <p style={{color:'black'}} className="fw-normal">Original language :<em style={{color:'green'}} className="fst-italic">{language}</em></p>
        
        <div className='mx-4 py-2 ' >
          <button  style={{userSelect:'none',borderTop: '4px solid black', borderRight: '4px solid black',borderBottom: '0px solid white', borderLeft: '0px solid white',backgroundColor:'transparent',width: '15px', height: '15px',color:'transparent',transform:'rotate(315deg)'}} onClick={increase} value={like} type="button" ></button>
  
          <h4 style={{display:'inline',margin:'0px 40px', width:'4px',height:'4px'}}>{like}</h4>
  
          <button style={{userSelect:'none',borderTop: '4px solid black', borderRight: '4px solid black',borderBottom: '0px solid white', borderLeft: '0px solid white',backgroundColor:'transparent',width: '15px', height: '15px',color:'transparent',transform:'rotate(135deg)'}} onClick={decrease} value={like} type="button" ></button>
        </div>
            
      </div>
                      
    )
}

export default Cardbody
