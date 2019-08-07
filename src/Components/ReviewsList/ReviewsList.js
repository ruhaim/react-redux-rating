import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Review from './Review';

const styles = {
    wrapper: {
        marginTop: '20px'
    }
}



class ReviewsList extends React.Component {

    render() {
        return (
            <div style={styles.wrapper}>
                <ListGroup>
                    <h5>Display the list of reviews here...</h5>
                    <p>Example:</p>
                    <Review />
                </ListGroup>
            </div>
        )
    }

}

export default ReviewsList