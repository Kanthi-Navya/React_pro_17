import { Row, Col, Container, Table } from "reactstrap"

const PersonalInfo = () => {
    return (
        <div>
            <br /> <br />
            <Container>
                <Row>
                    <Col xs="6">
                        <div className="text_family">MY PROFILE</div>
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>KANTHI NAVYA RANI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Birthday</th>
                                    <td>December 24, 1998</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>kanthinavya@gmail.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address</th>
                                    <td>Melbourne Victoria 3000 Australia</td>
                                </tr>
                                <tr>
                                    <th scope="row">Website</th>
                                    <td>kanthinavya.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs="6">
                        <div className="text_family">SOME SKILLS</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PersonalInfo;