import { Row, Button} from 'reactstrap';
import React, { useState } from 'react';
import CardDetails from './Details/CardDetailsComponent'
import PersonalInfo from './Details/PersonalInfoComponent';
import ImageSticky from './Details/ImageStickyComponent';
const About = () => {

const [state, setState] = useState(0);
  const HandleClick=()=> {
    setState(1);
    console.log("handle clicked ", state);
    return (
      <div>
        <br /><br />
        <CardDetails />
        <PersonalInfo />
        <ImageSticky />
        <br />
      </div>
    );
  }
  return (
    <div>
      <Row>
        <div className="test2">
          <h1>KANTHI NAVYA RANI</h1>
        
          <div className="para_test">
          <h4 >I'm an enthusiastic, responsible and hard working IT person. Being worked for different projects helped me to adopt to the changes quickly and made me a mature team worker. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
          
          <br/>
          <Button outline color="info" size="lg" onClick={()=>HandleClick()}>
           Let's Begin
          </Button>
          </h4>
          
        </div>
        </div>
      </Row>
      <div>
         {state && <HandleClick />}
      </div>
    </div>
  );
}

export default About;