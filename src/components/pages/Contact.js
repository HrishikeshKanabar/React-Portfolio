import { useState } from "react"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

;




const Contact = () => {
const [name,setName] = useState("");;
const [email,setEmail] = useState("");;
const [message,setMessage] = useState("");

const handleMouseOutName=(e)=>{
  console.log(e.target.value);
  if(e.target.value===""){
     alert("Name Field Required !!");
  }
}

const handleMouseOutEmail=(e)=>{
  
  console.log(e.target.value);
  if(e.target.value===""){
     alert("Email Field Required !!");
  }
  
}

const handleMouseTextOutArea=(e)=>{
  
  console.log(e.target.value);
  if(e.target.value===""){
     alert("Message Field Required !!");
  }
}

const handleSubmit=(e)=>{
   if(name!=="" || email!=="" || message!==""){
     alert("Thank you for sending contact deatils !! , We will soon reach you out");
   }
}



  return (
   
    <div className="SimpleForm">
      <Container>
      <h1>Contact Me</h1><br/>
      <Form>
        
        <Form.Group controlId="form.Name">
            <Form.Label>* Name</Form.Label>
            <Form.Control type="text"  value={name} placeholder="Enter name"  onMouseOut={handleMouseOutName} onChange={(e) => setName(e.target.value)} />
            <p className={"error"}></p>
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>* Email address</Form.Label>
            <Form.Control type="email"  value={email} placeholder="name@example.com"  onMouseOut={handleMouseOutEmail} onChange={(e) => setEmail(e.target.value)}/>
            <p className={"error"}></p>
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>* Message</Form.Label>
            <Form.Control as="textarea"   rows={3} value={message} onMouseOut={handleMouseTextOutArea} onChange={(e) => setMessage(e.target.value)}/><br/><br/>
            <p className={"error"}></p>
        
        </Form.Group>
        <br/>
        * fields are required.
        <br/><br/>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button><br/><br/>
      </Form>
     
    </Container>
    </div>
    
  );

  

}

   

  
  export default Contact;
  