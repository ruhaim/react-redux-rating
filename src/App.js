import React from 'react'
import ReviewForm from './Components/ReviewForm/ReviewForm'
import ReviewsList from './Components/ReviewsList/ReviewsList'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function styles () {
    return {
        marginTop:'20px'
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container" style={styles()}>
                <ToastContainer />
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
