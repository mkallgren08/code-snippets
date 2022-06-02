import React, { Component } from "react";
import {NavBar, PageWrapper} from "../../page_fragments";
import {Button, Card} from "../../components";
import {testAPI as API} from "../../utils";
class TestPage extends Component {
  constructor(props){
    super(props);
  }

  sayHi=(msg)=>{
    console.log(msg)
  }

  pingServer=()=>{
    API.pingServer().then(res=>{
      console.log(res)
    })
  }

  render (){
    return (
      <PageWrapper>
        <h1>Welcome to the test page</h1>
        <NavBar />
        <Button variant="primary" onClick={this.pingServer}> Click me to ping the server</Button>
        <Card 
          variant="top"
          src=""
          title="Test Card"
          body="No me gusta; tengo mucho dolor"
        >
          <Button variant="secondary" onClick={()=>{this.sayHi("Hello hello!")}}>Click me to test that I can say "Hi"</Button>
        </Card>
      </PageWrapper>
    )
  }
}

export default TestPage
