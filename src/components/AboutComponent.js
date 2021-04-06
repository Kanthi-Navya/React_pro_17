import { Row, Button } from 'reactstrap';

const About = () => {


var state = 0;
  const HandleClick=()=> {
   state = 1;
    console.log("handle clicked ", state);
    return (
      <div>
        <div className="test2">
          <h1>KANTHI NAVYA RANI</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Row>
        <div className="test2">
          <h1>KANTHI NAVYA RANI</h1>
        </div>
        <div className="para_test">
          <h4 >I'm an enthusiastic, responsible and hard working IT person. Being worked for different projects helped me to adopt to the changes quickly and made me a mature team worker. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
          
          <br/>
          <Button outline color="info" size="lg" onClick={()=>HandleClick()}>
           Let's Begin
          </Button>
          </h4>
          
        </div>
        
      </Row>
      <div>
         
      </div>
    </div>
  );
}

export default About;