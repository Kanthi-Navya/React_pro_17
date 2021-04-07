import { Card ,CardImg,CardBody,CardTitle, CardSubtitle,CardText,CardGroup, Container } from 'reactstrap';

const CardDetails = () => {
    return ( 
        <div>
            <Container>
       <CardGroup  >
        <Card body outline color="info" className="zoom">
          <CardImg top width="100%" src="https://res.cloudinary.com/practicaldev/image/fetch/s--UVX7ie6K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/v4y43jjfj7u5r8to8qdu.png" alt="Card image cap"  />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            
          </CardBody>
         
        </Card>
        <div className="cardGap"> </div>

        <Card body outline color="info" className="zoom">
          <CardImg top width="100%" src="https://www.kindpng.com/picc/m/171-1718210_html-dialog-element-taking-full-advantage-of-javascript.png" alt="Card image cap"  />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
        <div className="cardGap"> </div>
        <Card body outline color="info" className="zoom">
          <CardImg top width="100%" src="https://miro.medium.com/max/2556/1*eJcj5Tn5nu1KxiSFhsMNtQ.png" alt="Card image cap"  />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
        </CardGroup>
        </Container>
        </div>
     );
}
 
export default CardDetails;