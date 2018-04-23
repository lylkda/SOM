import React, { Component } from "react";
import API from "../../utils/API";
import {Container } from "../../components/Grid";
import Card from "../../components/Card";


class History extends Component {
  state = {
    students: [],
    g6Student: "",
    g7Student: "",
    g8Student: "",
    teacher: "",
    characterCounts: ""
  };

  componentDidMount() {
    this.loadStudents();
  }

  loadStudents = () => {
    API.getMyStudents()
      .then(res =>{
        console.log('getmystudent',res); 
        this.setState({ students: res.data, g6Student: "", g7Student: "", g8Student: "", teacher: "", characterCounts: "" })
      }
      )
      .catch(err => console.log(err));
  };


  render() {
    console.log("REnder", this.state.students);
    return (
      <Container fluid>
        <div className="jumbotron jumbotron-fluid" style={{color: "black"}}>
          <div className="container text-center">
            <h1 className="display-4" style={{color: "black"}}>History of Nominated Students</h1>
            <p className="lead">Here are the students you have nominated this year!</p>
          </div>
        </div>
        <div className="card-div" style={{ color: "black" }}>
        
        {/* filter out only me to see my entire */}
        {this.state.students.map(student => (
          <Card
            g6={student.g6Student}
            g7={student.g7Student}
            g8={student.g8Student}
            cc={student.characterCounts} 
            title={new Date(Date.parse(student.date)).toLocaleString('en-US', {month: 'long'})}/>
        ))}
        </div>
        </Container>
    )
  }
}

export default History;
