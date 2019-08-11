import React, { Fragment } from 'react'
import { ListGroupItem, } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Button } from '@material-ui/core';

const placeholder = {
    "body": "Morbi mollis vehicula dolor at auctor.",
    "rating": 5
}

class Review extends React.Component {
    
    onItemDeleteClick = ()=>{
        const {onItemDeleteClick} = this.props
        onItemDeleteClick(this.props.review.id)
    }
    render() {
        const {isMarkedForDelete,review } = this.props
        const { body, rating, id } = review || placeholder;
        
        return (
            <ListGroupItem className="d-flex justify-content-between align-items-center">
                <div>
                    {isMarkedForDelete ? 
                    <p> Deleting... </p> :
                    <Fragment>
                        <p>{body}</p>
                        <StarRatingComponent
                            name={`star-comp-${id}`}
                            value={rating}
                            editing={false}
                        />
                    </Fragment>}
                    
                    
                </div>
                <div>
                <Button bsstyle="primary" 
                        bssize="small"
                        onClick={this.onItemDeleteClick} 
                        disabled={isMarkedForDelete} >Delete</Button>
                </div>


            </ListGroupItem>
        )
    }

}

export default Review