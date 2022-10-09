import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Cards(props){
    return(
        
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
             <a href=''>
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                  {props.body}
                </Card.Text>
              </Card.Body>
              </a> 
            </Card>
          </Col>
        ))}
      </Row>
            
          );
        }
        
        
    
 
  
      

    

export default Cards;