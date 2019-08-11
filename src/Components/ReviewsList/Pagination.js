import ReactPaginate from 'react-paginate';
import React from 'react'

export const Pagination = (props)=>{
    return (
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={<a className="page-link">...</a>}
            breakClassName={'bpage-item'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={'pagination'}
            subContainerClassName={'page-item'}
            activeClassName={'active'}
            pageClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            {...props}
        />)


}