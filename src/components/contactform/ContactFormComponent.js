import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
    <div>
        <div>
        <Container>
            <h1>Contact</h1>
            <Form>
                <FormGroup row>
                    <InputGroup>
                        <Label for="exampleName" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input placeholder="username" type="text" name="name" id="exampleName" placeholder="with a placeholder" />
                        </Col>
                    </InputGroup>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    {/* <Input type="textarea" name="text" id="exampleText" /> */}
                    <Col sm={10}>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e, editor) => { handleChange(e, editor) }} />
                    </Col>
                </FormGroup>
                
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
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
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Container>
        
        </div>

        
        </div>
    );
}