import React, { Component } from 'react'
import Contacts from './components/Contacts'
// import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'

import {Container, Header, Icon, Divider} from 'semantic-ui-react'

class App extends Component {
    state ={
      contacts: [
        {
          id: 1, 
          firstName: "Jerry", 
          phone: "555-555-5555" 
        }, 
        {
          id: 2, 
          firstName: "George", 
          phone: "333-333-5555" 
        }, 
        {
          id: 3, 
          firstName: "Cosmo", 
          phone: "444-444-4444" 
        }, 
      ]
    }; 

  render() {

    return (
      <Container style={{paddingTop: '25px', }}> 
        <Header as="h1" icon textAlign="center" color="blue">
          <Icon name="address book outline" circular/>
          Contact List
          </Header>
          <Divider />
          <br/>
          <ContactForm />
          <Contacts contactList={this.state.contacts} propName="propValue"/> 
        </Container>
    )
  }
}


export default App;
