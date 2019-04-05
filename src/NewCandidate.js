import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class NewCandidate extends React.Component {
  render() {
    return (
      <Form>
        <Row form>
          <Col md={6}> <h1> Profile of a New Candidate </h1>
            <FormGroup>
              <Label for="">First Name</Label>
              <Input type="text" name="" id="" placeholder="Candiadte's First Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="">Last Name</Label>
              <Input type="text" name="" id="" placeholder="Candidate's Last Name" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="piclink">Profile Picture</Label>
          <Input type="text" name="address" id="piclink" placeholder="Link to the picture"/>
        </FormGroup>
        <FormGroup>
          <Label for="Last Job">Last Job</Label>
          <Input type="text" name="" id="" placeholder="The last job"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Skils">Skills</Label>
              <Input type="text" name="skill" id="skills" placeholder="The last job"/>
              </FormGroup>
          </Col>
        </Row>
       
        <Button>Sign in</Button>
      </Form>
    );
  }
}