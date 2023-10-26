import { Component } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'


class CommentList extends Component {
    state = {
      comments: [], 
    }
  
    
  
  
    componentDidMount() {
      const getComments = () => {
      fetch ("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
          headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNzMwYmY2ZTNkZDAwMTQ5NWU0OGQiLCJpYXQiOjE2OTgzMjkzNTUsImV4cCI6MTY5OTUzODk1NX0.pMjK24bFCBjjiYo9MKjwSE50-8Zom_IYMcoQC5-lB58"
          }
          })
        .then((response) => {
          if (response.ok) {
            
            return response.json()
          } else {
            
            throw new Error('Errore commento!')
          }
        })
        .then((data) => {
          console.log('DATI RECUPERATI', data)
         
          this.setState({
            comments: data,
          })
       
        })
        .catch((error) => {
          console.log('ERROR!', error)
        })
    }
    
   
    
    }
  
    render() {
     
  
      return (
        <Container>
          <Row className="justify-content-center mt-3">
            <Col md={6}>
              <h2 className="text-center my-3">Recensioni:</h2>
              <ListGroup>
                {this.state.comments.map((comment) => {
                  return (
                    <ListGroup.Item key={comment._id}>
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )
    }
  }
  
  export default CommentList