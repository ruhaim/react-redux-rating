import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ReviewStarRating from './ReviewStarRating'
import ReviewBody from './ReviewBody'

const styles = {
    wrapper: {
        paddingBottom:'20px',
        borderBottom:'1px solid grey'
    }
}

class ReviewForm extends React.Component {
    render () {
        return (
            <div style={styles.wrapper}>
                <Row>
                    <Col md={12}>
                        <ReviewBody />
                        <ReviewStarRating />
                        <Button bsStyle="primary" bsSize="small">Save review</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ReviewForm