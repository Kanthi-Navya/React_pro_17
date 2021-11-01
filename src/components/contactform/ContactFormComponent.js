import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import { Container } from 'reactstrap';
import { InputGroup } from 'reactstrap';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function ContactForm() {
    const [data, setData] = useState('');
    const handleChange = (e, editor) => {
        setData(editor.getData());
    }
    
    return (
    <div xs="12">
        <Row>
        <Col xs="6">
            <div>
             <img src="https://images.unsplash.com/photo-1540104751685-761c740a2208?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt=" not found" className = "wallPaperImg"/>
            </div>
        </Col>
        
       
        <Col xs="6">
        <Container>
            <div className="contactForm">
            <h1>Contact</h1>
            <Form>
                <FormGroup row>handleSubmit
                    <InputGroup>
                        <Label for="exampleName" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input placeholder="username" type="text" name="name" id="exampleName"  />
                        </Col>
                    </InputGroup>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"  />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    {/* <Input type="textarea" name="text" id="exampleText" /> */}
                    <Col sm={10}>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e, editor) => { handleChange(e, editor) }} value="ckeditor"/>
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted" value="exampleFile" >
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </Col>
                </FormGroup>

                <FormGroup row>

                    <Col sm={{ size: 10 }}>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" id="checkbox2" />{' '}
                                Check me out
                            </Label>
                        </FormGroup>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button> Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
            </div>
        </Container>
        
        
        </Col>
        </Row>
        </div>
       
    );
}