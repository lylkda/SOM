import React, { Component } from "react";
import Auth from '../../utils/Auth';
import { BrowserRouter as Redirect } from "react-router-dom";
import API from "../../utils/API";
import {Container } from "../../components/Grid";
import { Input, FormBtn, DropDownList } from "../../components/Form";
import Monthly from "./award.json";

//this will display the award depending on the month
let holder = new Date();
let elm1 = holder.getMonth();
let elm2 = Object.entries(Monthly)[elm1];
let month = elm2[1];

class Students extends Component {
  state = {
    students: [],
    g6Student: "",
    g7Student: "",
    g8Student: "",
    characterCounts: "",
    state: ""
  };

  handleFormSubmit = (event, data) => {
    event.preventDefault();
    if (this.state.characterCounts && this.state.grade) {
      if (!this.state.g6Student&&!this.state.g7Student){
        API.saveStudent({
          g6Student: "N/A",
          g7Student: "N/A",
          g8Student: this.state.g8Student,
          characterCounts: this.state.characterCounts,
          grade: this.state.grade
        })
        .then(res => this.loadStudents(), alert("Nomination complete!"), window.location.href = "nominated")
        .catch(err => console.log(err));
      }
      else{
        API.saveStudent({
          g6Student: this.state.g6Student,
          g7Student: this.state.g7Student,
          g8Student: this.state.g8Student,
          characterCounts: this.state.characterCounts,
          grade: this.state.grade
        })
          .then(res => this.loadStudents(), alert("Nomination complete!"), window.location.href = "nominated")
          .catch(err => console.log(err));
      }
    }
    if (!this.state.characterCounts){
      alert("Please nominate a student for Character Counts");
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      Auth.isUserAuthenticated() ? (
      <Container fluid>
        <div class="jumbotron jumbotron-fluid" style={{color: "black"}}>
          <div class="container text-center">
            <h1 class="display-4" style={{color: "black"}}>Student of the Month</h1>
            <p class="lead">You are not required to submit for all grades!</p>
          </div>
        </div>
          <div className="card-div">
          <div className="card bg-dark">
            <div className="bg-success text-white text-center card-header">
              Student of the Month Nominations
            </div>
            <div className="card-body">

              <form>
                <Input inputProps={{
                  value:this.state.g6Student,
                  onChange:this.handleInputChange,
                  name:"g6Student",
                  placeholder:"Student Name"
                }}
                label="6th Grader: "
                />
                <Input inputProps={{
                  value: this.state.g7Student,
                  onChange: this.handleInputChange,
                  name: "g7Student",
                  placeholder: "Student Name"
                }}
                label="7th Grader: "
                />
                <Input
                  inputProps={{
                    value: this.state.g8Student,
                    onChange: this.handleInputChange,
                    name: "g8Student",
                    placeholder: "Student Name"
                  }}
                  label="8th Grader: "
                />
                <Input
                  inputProps={{
                    value: this.state.characterCounts,
                    onChange: this.handleInputChange,
                    name: "characterCounts",
                    placeholder: "Character Counts Nomination"
                  }}
                  label={`${month}: `}
                />
                <DropDownList
                  inputProps={{
                    value: this.state.grade,
                    onChange: this.handleInputChange,
                    name: "grade"
                    }}
                  values={[{label: "Please Select a Grade Level", value: false}, { label: "6th Grade", value: 6 }, {label: "7th Grade", value: 7}, {label: "8th Grade", value: 8}]}
                  label="Grade: "
                />
                <div className="btn-div">
               <FormBtn
                    disabled={!(this.state.g7Student || this.state.g6Student || this.state.g8Student || this.state.characterCounts)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Student
                  </FormBtn>
                </div>
              </form>
            </div>
          </div>
          </div>

      </Container>
      ) : (
        <Redirect
            to='/'
          />
      )
    );
  }
}

export default Students;
