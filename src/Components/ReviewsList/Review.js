import React from 'react'
import { ListGroupItem, } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const placeholder = {
        "body": "Morbi mollis vehicula dolor at auctor.",
        "rating": 5
    }

class Review extends React.Component {
    
    render() {
        const {body, rating, id} = this.props.review || placeholder;
        return (
            <ListGroupItem>
                <p>{ body }</p>
                <StarRatingComponent
                    name={`star-comp-${id}`}
                    value={rating}
                    editing={false}
                />
            </ListGroupItem>
        )
    }

}

export default Review