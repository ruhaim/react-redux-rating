import React from 'react'
import { Form } from 'react-bootstrap'

const styles = {
    textarea: {
        'height': '100px',
        'resize': 'none'
    },
}

const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

class ReviewBody extends React.Component {
    render() {
        return (
            <Form.Group controlId="formControlsTextarea">
                <Form.Label>Body</Form.Label>
                <Form.Control as="textarea" rows="3" laceholder={placeholderText} style={styles.textarea} />
            </Form.Group>
        )
    }
}

export default ReviewBody