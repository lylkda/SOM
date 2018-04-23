import axios from "axios";
import Auth from './Auth';

axios.defaults.headers.common['Authorization'] = `bearer ${Auth.getToken()}`;
export default {
  getMyStudents: function() {
    return axios.get('/api/students/mystudents');
  }, 
  // Gets all students
  getStudents: function() {
    return axios.get("/api/students");
  },
  // Gets the student with the given id
  getStudent: function(id) {
    return axios.get("/api/students/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function(id) {
    return axios.delete("/api/students/" + id);
  },
  // Saves a student to the database
  saveStudent: function(studentData) {
    return axios.post("/api/students", studentData);
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    return axios.post("/auth/login", userData);
  },
  // Sign up a user
  signUp: function(userData) {
    return axios.post("/auth/signup", userData);
  }
};
