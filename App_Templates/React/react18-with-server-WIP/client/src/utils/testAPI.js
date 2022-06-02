// Note: you wil need to set up a setupProxy.js file in the src folder to communicate with the Express 
// server set up on the backend; from create-react-app docs (at the bottom of the page): 
// https://create-react-app.dev/docs/proxying-api-requests-in-development/
import axios from "axios";

export const testAPI= {
  // Gets all Tests
  pingServer: function () {
    return axios.get('/api/test');
  },
  // Gets the Test with the given id
  getTest: function (id) {
    return axios.get(`/api/test/${id}`);
  },
  // Deletes ALL Tests with the given id
  deleteTests: function () {
    return axios.delete('/api/test/');
  },
  // Deletes the Test with the given id
  deleteTest: function (id) {
    return axios.delete(`/api/test/${id}`);
  },
  // Saves a Test to the database
  saveTest: function (TestData) {
    return axios.post('/api/test/', TestData);
  },
  generateTests: function() {
    return axios.get(`/api/test/generateSampleData`);
  }
};

// exports.testAPI=testAPI;