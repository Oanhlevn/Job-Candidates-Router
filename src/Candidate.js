import React from "react";
import { Row, Col } from "reactstrap";

const Candidate = ({ match }) => {
    const id = match.params.id;
    const img = match.params.profilePic;
    return (
        <div>
            <Row>
                <Col> <h1> Candidate number {id} </h1> </Col>
                <Col> <img src={img} />  </Col>
            </Row>

        </div>);
}
export default Candidate;