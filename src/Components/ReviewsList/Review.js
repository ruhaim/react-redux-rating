import React from 'react'
import { ListGroupItem, } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const placeholder = {
        "body": "Morbi mollis vehicula dolor at auctor.",
        "rating": 5
    }

class Review extends React.Component {
    
    render() {
        const {body, rating} = this.props.review || placeholder;
        debugger
        return (
            <ListGroupItem>
                <p>{ body }</p>
                <StarRatingComponent
                    value={rating}
                    editing={false}
                />
            </ListGroupItem>
        )
    }

}

export default Review