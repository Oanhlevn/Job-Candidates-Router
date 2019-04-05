import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { Button } from "reactstrap";

// Data source 
const TEST_DATA = [{ id: 1, name: "Oanh", skill: 10, experience: 3 },
{ id: 2, name: "Tuan", skill: 3, experience: 10 },
{ id: 5, name: "Minh", skill: 12, experience: 9 }]

class App extends Component {
  constructor() {
    super();
    this.state = { candidates: [] };

  }

  async fetchCandidates() {
    const url = "http://localhost:3001/candidates";
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
    this.setState({ candidates: data }, () => {
      console.log("After setting state")
      console.log(this.state.candidates);
    });

  }
  componentDidMount() {
    this.fetchCandidates();
  }
  //Render data source (API) feature add,delete,update new data source (API)
  render() {
   
  if (this.state.candidates)
  {
  return ( 
    <div>
    <Link to={"/newcandidate/"}>Create new candidate's profile </Link>

   </div>
   <h1> List of candidates </h1>
     <Row>
  {this.state.candidates.map(c => { return  <Col sx="3" sm="3" md="3" lg="3" xl="3">  <Link to={`/candidates/${c.id}`}> {c.firstName + c.lastName}  </Link>
  <img s> </img>
   </Col>  })}
       )}
       </Row>
        );
  }
  else 
  { return (
  <h1>No Movies!</h1> );
  
  }    
}  

 
      



export default App; 
