import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function addComment() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicComment">
        <Form.Label>Recensione</Form.Label>
        <Form.Control type="text" placeholder="Enter a review" /> 
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default addComment;