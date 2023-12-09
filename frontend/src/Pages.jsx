import React from 'react'

const Pages = ({page,setPreviouspage,setNextpage}) => {
    return (
        <ul className="pagination mb-5 mt-5 d-flex justify-content-center">
                <p style={{cursor:"pointer"}} onClick={setPreviouspage} className="page-link">Previous</p>
                <p className="page-item active page-link" >{page}</p>
                <p style={{cursor:"pointer"}} onClick={setNextpage} className="page-link" >Next</p>
        </ul>
    )
}

export default Pages
