import { connect } from 'react-redux'
import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Review from './Review';
import {loadAllReviewsAction} from '../../Redux/reviewRedux/loadAllReviewsRedux'
import ReactPaginate from 'react-paginate';
import { Pagination } from './Pagination';

const styles = {
    wrapper: {
        marginTop: '20px'
    }
}


class ReviewsList extends React.Component {
    state = {
        numItemsPerPage:5,
        currentPage:1
    }
    static getDerivedStateFromProps(props, state){
        if(props.data){
            return {
                numTotalPages:Math.max(props.totalItemCount/state.numItemsPerPage)
            }
        }
        return null;
    }
    componentDidMount(){
        this.loadReviewList();
    }
    loadReviewList(){
        this.props.loadAllReviewsAction({
            _page:this.state.currentPage,
            _limit:this.state.numItemsPerPage}
        )
    }
    handlePageClick = data => {
        this.setState({ currentPage: data.selected+1 },()=>{
            this.loadReviewList()
        })
    };

    render() {
        const {isLoading, data, error} = this.props;
        const reviewList = data || []
        return (
            <div style={styles.wrapper}>
                <ListGroup>
                    {isLoading && <div>Loading reviews...</div>}
                    {error && <div>Error encountered</div>}
                    {reviewList.map((review)=>{
                        return <Review key={review.id} review={review}/>
                    })}
                </ListGroup>
                {data && <Pagination 
                    pageCount={this.state.numTotalPages}
                    onPageChange={this.handlePageClick}
                />}
                
                <p>Example:</p>
                <Review />
            </div>
        )
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    const {isLoading, data:response, error} = state.reviewAllLoad
    const {data, totalItemCount} = response || {}
    return {
      isLoading,
      data,
      error,
      totalItemCount
    }
  }
  
  const mapDispatchToProps = { loadAllReviewsAction }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReviewsList)

// export default ReviewsList