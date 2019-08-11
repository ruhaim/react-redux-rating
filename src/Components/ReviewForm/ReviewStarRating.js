import React from 'react'
import { Form } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import { ErrorMessage } from 'formik';

const styles = {
    label: {
        display: 'block'
    }
}

/*
    react-star-rating-component
    https://github.com/voronianski/react-star-rating-component
*/

class ReviewStarRating extends React.Component {

    onStarClick = (nextValue, prevValue) => {
        const {form,field} = this.props
        form.setFieldValue(field.name,nextValue);
    }

    render() {
        const {value} = this.props.field
        return (
            <Form.Group>
                <Form.Label style={styles.label}>
                    Rating
                </Form.Label>
                <ErrorMessage name="rating" 
                              component="div" 
                              className="invalid-feedback d-block" />
                <StarRatingComponent
                    value={value}
                    name="star-rating"
                    onStarClick={this.onStarClick}
                />
            </Form.Group>
        )
    }
}

export default ReviewStarRating