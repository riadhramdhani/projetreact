import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState
} from 'react'

function BasicExample() {
  const [prix,setPrix]=useState(3000)
  const [quantité,setQuantité]=useState(1)

  const handlequantityplus=()=>{
  
    setQuantité(quantité+1)
   

  }
const handlequantitysub=()=>{
  setQuantité(quantité>1?quantité-1:quantité)
  // totalprice()
}
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGMlMjBnYW1pbmd8ZW58MHx8MHx8&w=1000&q=80" />
      <Card.Body>
        <Card.Title>My-card</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <h4>price:<span id="prix">{prix*quantité}</span>$</h4>
        <h4>quantité:<span id="quanty">{quantité}</span></h4>
        
        
      
        
        <button onClick={()=>handlequantityplus()}>+</button>

        <Button variant="primary">schoppe</Button>
        
          

         
        
        <button onClick={()=>  handlequantitysub()}>-</button>

      </Card.Body>
    </Card>
  );
}

export default BasicExample;