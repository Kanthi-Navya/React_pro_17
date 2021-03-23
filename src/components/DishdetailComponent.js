// import {Card, CardImg, CardBody, Button, CardTitle, CardSubtitle, CardText } from 'reactstrap';
const Dishdetail = (dish) => {
    debugger
    console.log(dish, "dish detail ");
    
    
    return ( 
      <>
      <h2>Dish details</h2>
      <p>{dish.id}</p>
      </>
    //     <div>
    //     <h2>Selected Dish</h2>
    //     <div>
    //   <Card>
    //     <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle tag="h5">{dish.name}</CardTitle>
    //       <CardSubtitle tag="h6" className="mb-2 text-muted">{dish.category}</CardSubtitle>
    //       <CardText>{dish.description}</CardText>
    //       <Button>Button</Button>
    //     </CardBody>
    //   </Card>
    // </div>
    // </div>
     );
}
 
export default Dishdetail;