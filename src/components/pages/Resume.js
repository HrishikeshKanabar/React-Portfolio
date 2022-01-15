import ListGroup from 'react-bootstrap/ListGroup';

const Resume = () => (
  <div>
  <h1>Skills and Resume</h1>
 
  <center>
  <h1>Resume</h1>
  <a href={require("../assests/H_Kanabar.pdf")}>
  <h2> CLCK HERE TO GET RESUME</h2>
  </a>
  </center>
    <div class="list-group">
     
      
      <br/>
     
      <ListGroup>
        <ListGroup.Item>Salesforce</ListGroup.Item>
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>JAVA</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JAVASRIPT</ListGroup.Item>
        <ListGroup.Item>APEX</ListGroup.Item>
        <ListGroup.Item>LIGHTNING WEB COMPONENTS</ListGroup.Item>
        <ListGroup.Item>AURA COMPONENTS</ListGroup.Item>
        <ListGroup.Item>Sales and Service Cloud</ListGroup.Item>
      </ListGroup>
    </div>
    </div>
  );
  
  export default Resume;