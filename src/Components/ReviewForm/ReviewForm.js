import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import ReviewStarRating from './ReviewStarRating'
import ReviewBody from './ReviewBody'
import {Formik, Form, ErrorMessage, Field} from 'formik';
import {addReviewAction} from '../../Redux/reviewRedux/addReviewRedux'

const styles = {
    wrapper: {
        paddingBottom:'20px',
        borderBottom:'1px solid grey'
    }
}

class ReviewForm extends React.Component {

    addFormValidate = (values)=>{
        const {body, rating } = values
        let errors = {};
        if(!body || body.trim()===""){
            errors.body = "Body cannot be empty"
        }else if(!rating){
            errors.rating = "A rating must be set"
        }else if(rating>5 || rating <1){
            errors.rating = "Rating should be between 1 and 5"
        }
        return errors;

    }
    onAddFormSubmit = (values, {setSubmitting})=>{
        debugger
        //alert(JSON.stringify(values, null, 2));
        this.props.addReviewAction(values)
        //setSubmitting(false);

    }
    render () {
        return (
            <div style={styles.wrapper}>
                <Row>
                    <Col md={12}>
                        <Formik
                            initialValues={{ body: '', rating: 0 }}
                            validate={this.addFormValidate}
                            onSubmit={this.onAddFormSubmit}>
                            {
                                ({isSubmitting })=> (
                                    <Form>
                                        <Field name="body" component={ReviewBody}/>
                                        <ErrorMessage name="body" component="div"  />
                                        <Field name="rating" component={ReviewStarRating}/>
                                        <ErrorMessage name="rating" component="div" />
                                        <Button 
                                            bsstyle="primary" 
                                            bssize="small" 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            >
                                            Save review
                                        </Button>
                                    </Form>
                                )
                            }
                            </Formik>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    const {isLoading, data:response, error} = state.reviewAdd
    const {data} = response || {}
    return {
      isLoading,
      data,
      error
    }
  }
  
const mapDispatchToProps = { addReviewAction }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm)

//export default ReviewForm