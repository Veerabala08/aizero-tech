import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BasicExample({CardImg, CardText, slug, CardTitle, showButton=false}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${slug}`);
  };
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={CardImg} />
      <Card.Body>
        <Card.Title>{CardTitle}</Card.Title>
        <Card.Text>
          {CardText}
        </Card.Text>
        {!showButton ?   <Button  onClick={handleClick} variant="primary">Learn more</Button> : ""}
      
      </Card.Body>
    </Card>
  );
}

export default BasicExample;