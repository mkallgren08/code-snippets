import React, { Component } from "react";
import {Footer,NavBar, PageWrapper} from "../../page_fragments"

class MainPage extends Component {
  constructor(props){
    super(props);
  }


  render (){
    return (
      <PageWrapper>
        <h1>Welcome to the main page</h1>
        <NavBar />
        <div>
          <h1>
            Page content goes here
          </h1>
        </div>

        <Footer />
      </PageWrapper>
    )
  }
}

export default MainPage
