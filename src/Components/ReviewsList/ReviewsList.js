import { connect } from 'react-redux'
import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Review from './Review';
import {loadAllReviewsAction} from '../../Redux/reviewRedux/loadAllReviewsRedux'

const styles = {
    wrapper: {
        marginTop: '20px'
    }
}


class ReviewsList extends React.Component {
    componentDidMount(){
        this.props.loadAllReviewsAction()
    }

    render() {
        const {isLoading, data, error} = this.props;
        const reviewList = data || []
        return (
            <div style={styles.wrapper}>
                <ListGroup>
                    {isLoading ? <div>loading</div>:null}
                    {error ? <div>error encountered</div>:null}
                    {reviewList.map((review)=>{
                        
                        return <Review review={review}/>
                    })}

                    <p>Example:</p>
                    <Review />
                </ListGroup>
            </div>
        )
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    const {isLoading, data, error} = state.reviewAllLoad
    return {
      isLoading,
      data,
      error
    }
  }
  
  const mapDispatchToProps = { loadAllReviewsAction }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReviewsList)

// export default ReviewsList