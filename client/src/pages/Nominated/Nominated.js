import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import {Container } from "../../components/Grid";
import Card from "../../components/Card";

class Nominated extends Component {
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
    API.getStudents()
      .then(res =>
        this.setState({ students: res.data, g6Student: "", g7Student: "", g8Student: "", teacher: "", characterCounts: "" })
      )
      .catch(err => console.log(err));
  };

  deleteStudent = id => {
    API.deleteStudent(id)
      .then(res => this.loadStudents())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.g6Student || this.state.teacher) {
      API.saveStudent({
        g6Student: this.state.g6Student,
        g7Student: this.state.g7Student,
        g8Student: this.state.g8Student,
        teacher: this.state.teacher,
        characterCounts: this.state.characterCounts
      })
        .then(res => this.loadStudents())
        .catch(err => console.log(err));
    }
  };

  render() {
    let thisMM = new Date().toLocaleString('en-US', { month: 'long' });
    return (
      <Container fluid>
        <div className="jumbotron jumbotron-fluid" style={{color: "black"}}>
          <div className="container text-center">
            <h1 className="display-4" style={{color: "black"}}>{thisMM}</h1>
            <div className="lead">Nominations from all teachers for this month</div>
            <p><em>Please make sure to delete any duplicates</em></p>
          </div>
        </div>

        {this.state.students.length ? (
          <div className="card-div" style={{color: "black"}}>
            {this.state.students
              .filter(student => new Date(Date.parse(student.date)).toLocaleString('en-US', { month: 'long' }) === thisMM )
              .map(student => (

              <Card
                g6={student.g6Student}
                g7={student.g7Student}
                g8={student.g8Student}
                cc={student.characterCounts} 
                title={student.teacher}>
                <DeleteBtn onClick={() => this.deleteStudent(student._id)} />
                </Card>
            ))}
          </div>
        ) : (
          <h3>No students have been nominated yet!</h3>
        )
}

      </Container>
    );
  }
}

export default Nominated;
