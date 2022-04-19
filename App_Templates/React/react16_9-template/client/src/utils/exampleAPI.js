import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/examples");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/examples/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/examples/" + id);
  },
  // Saves a book to the database
  saveArticle: function(exampleData) {
    return axios.post("/api/examples", exampleData);
  }
};
