import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Test extends Component {
  state = {
    searchterm : "",
    numberofrecords : 5,
    startyear : "",
    endyear : "",
    articles: [],
    savedarticles: []
  };

  //=========================================EXAMPLE CODE FOR DB QUERYING================================
  // Initial load of saved articles
  // componentDidMount() {
  //   this.loadSavedArticles("");
  // }

  // code to get saved articles
  // loadSavedArticles = () => {
  //   API.getArticles()
  //     .then(
  //       res => {
  //         this.setState({ savedarticles: res.data })
  //       })
  //     // console.log(res.data.response.docs);
  //     .catch(err => console.log(err));
  // };

  
  // // handle form input
  // handleInputChange = event => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // // search NYT for articles
  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   if (this.state.searchterm) {
  //     APINYT.search(this.state.searchterm,
  //                   this.state.numberofrecords,
  //                   this.state.startyear,
  //                   this.state.endyear
  //                   )
  //       .then(res => { this.setState({ articles: res.data.response.docs });
  //       })
  //       .catch(err => console.log(err));
  //   } 
  // };

  // //save an article
  // handleArticleSave = (data) => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   API.saveArticle(data)
  //     .then(res => this.loadSavedArticles())
  //       // console.log(res.data.response.docs);
  //     .catch(err => console.log(err));
  // };

  // // delete a saved article
  // handleArticleDelete = (id) => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   API.deleteArticle(id)
  //     .then(res => this.loadSavedArticles())
  //     // console.log(res.data.response.docs);
  //     .catch(err => console.log(err));
  // };

// This is a leftover from my template file but would like to leave it here in case I add 
// an entry form for feedback in the future

  // handle form input
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.readUserInput(event)
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Welcome to React!!</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Test;
