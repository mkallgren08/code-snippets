import React, { Component } from "react";
import {NavBar} from "../../page_fragments/NavBar";
import {PageWrapper} from "../../page_fragments/PageWrapper";

class TestPage extends Component {
  constructor(props){
    super(props);
  }

  render (){
    return (
      <PageWrapper>
        <h1>Welcome to the test page</h1>
        <NavBar />
      </PageWrapper>
    )
  }
}

export default TestPage
