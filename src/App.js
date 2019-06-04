import React, { Component } from 'react'
import Contacts from './components/Contacts'
// import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'

import {Container, Header, Icon, Divider, Segment, Button} from 'semantic-ui-react'

class App extends Component {
    state ={
      contacts: [
        {
          id: 1, 
          name: "Jerry", 
          phone: "555-555-5555" 
        }, 
        {
          id: 2, 
          name: "George", 
          phone: "333-333-5555" 
        }, 
        {
          id: 3, 
          name: "Cosmo", 
          phone: "444-444-4444" 
        }, 
      ], 
      showForm: true, 
    }; 

    getId = () => {
      // NOTE We are just using this as a helper function for id's since we aren't using a db yet
      return Math.floor((1 + Math.random()) * 10000);
    };

    // passing in name and phone through contact form to here: 
    addContact = (contactData) => {
      let contact = {id: this.getId(), ...contactData }; 
      // spread operator will remove the inner array, which is why we place it in [] to make it a new array. Contacts is adding the contact at the end of the data array. 
      this.setState({contacts: [...this.state.contacts, contact], }); 
    }

    removeContact = (id) => {
      const contacts = this.state.contacts.filter( contact => {
        if (contact.id !== id )
        return contact; 
      })

      this.setState({contacts, }); 
    };

    toggleForm = () => this.setState({ showForm: !this.state.showForm}); 

  render() {

    return (
      <Container style={{paddingTop: '25px', textAlign:"center" }}> 
        <Header as="h1" icon textAlign="center" color="blue">
          <Icon name="address book outline" circular/>
          Contact List
          </Header>
          <Divider />
          <br/>
          <Segment basic>
            <Button icon color="blue" onClick={this.toggleForm}> 
              <Icon name={this.state.showForm ? "angle double up" : "angle double down"}/> 
            </Button>
            {this.state.showForm ? <ContactForm add={this.addContact}/> : null}
          
        
          </Segment>
          <br/>
          <br/>
          <Contacts 
          contactList={this.state.contacts} 
          remove={this.removeContact}/> 
        </Container>
    )
  }
}


export default App;
