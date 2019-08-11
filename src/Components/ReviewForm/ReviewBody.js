import React from 'react'
import { Form } from 'react-bootstrap'

const styles = {
    textarea: {
        'height': '100px',
        'resize': 'none'
    },
}

const placeholderText = 'Please enter your comment...'

class ReviewBody extends React.Component {
    render() {
        const {field} = this.props
        return (
            <Form.Group controlId="formControlsTextarea">
                <Form.Label>Body*</Form.Label>
                <Form.Control as="textarea" 
                    rows="3" 
                    name = "body"
                    placeholder={placeholderText} 
                    style={styles.textarea} 
                    required
                    {...field}  
                    />
            </Form.Group>
        )
    }
}

export default ReviewBody