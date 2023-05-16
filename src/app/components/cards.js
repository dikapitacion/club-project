import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card className='card' style={{ width:'full' }}>
      <Card.Img variant="top" src={props.image} className='image' />
      <Card.Body className='card-body'>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='card-body'> 
        amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;