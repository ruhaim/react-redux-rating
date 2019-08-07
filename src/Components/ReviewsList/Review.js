import React from 'react'
import { ListGroupItem, } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const placeholder = {
        "body": "Morbi mollis vehicula dolor at auctor.",
        "stars": 5
    }

class Review extends React.Component {

    render() {
        return (
            <ListGroupItem>
                <p>{ placeholder.body }</p>
                <StarRatingComponent
                    name="star-rating"
                    value={placeholder.stars}
                    editing={false}
                />
            </ListGroupItem>
        )
    }

}

export default Review