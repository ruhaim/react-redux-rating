import React from 'react'
import ReviewForm from './Components/ReviewForm/ReviewForm'
import ReviewsList from './Components/ReviewsList/ReviewsList'
import { Col, Row } from 'react-bootstrap'

function styles () {
    return {
        marginTop:'20px'
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container" style={styles()}>
                <Row>
                  <Col md={4} mdOffset={4}>
                    <ReviewForm />
                    <ReviewsList />
                  </Col>
                </Row>
            </div>
        )
    }
}

export default App
