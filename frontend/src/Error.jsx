import React from 'react'

const Error = ({error }) => {
    return (
        <div style={{margin:"180px auto",display:'inline'}} className="  d-flex justify-content-center ">
            <h1 className=" text-danger  "  >Error <p className='fs-6 text-danger'>{error}</p></h1>
            
        </div>
    )
}

export default Error
