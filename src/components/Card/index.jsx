import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({CardImg, CardText}) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={CardImg} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {CardText}
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;