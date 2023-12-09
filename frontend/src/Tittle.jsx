import React from 'react'

const Tittle = ({genere}) => {
    return (
        <div >
            <h1 className='d-inline' >{genere} </h1>
            <h1 className=' d-inline text-bg-warning  rounded shadow-sm'> Movies</h1>
        </div>
    )
}

export default Tittle
