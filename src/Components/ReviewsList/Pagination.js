import ReactPaginate from 'react-paginate';
import React from 'react'

export const Pagination = (props)=>{
    return (
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            {...props}
        />)


}