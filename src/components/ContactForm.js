import React, { Component } from 'react'
import {Form, FormInput} from 'semantic-ui-react'; 

export default class ContactForm extends Component {
  // Name of the state needs to match the name in the input form. 
  state = { name: "", phone: "", }; 

  handleChange = (e, {name, value, }) => {
    // switch(e.target.name) {
    //   case "name": 
    //   this.setState({name: e.target.value})
    //   break 
    //   case "phone": 
    //   this.setState({phone: e.target.value})
    //   break
    // }
    this.setState({[name]: value,})

  };

  handleSubmit = (event) => {
    debugger
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
       <Form.Group widths="equal">
         <Form.Input
         fluid
         label="Name:"
         placeholder="Name"
         name="name"
         value={this.state.name}
         onChange={this.handleChange}
         />
         
         <Form.Input
         fluid
         label="Phone:"
         placeholder="Phone"
         name="phone"
         value={this.state.phone}
         onChange={this.handleChange}
         />
         <br/>
         <Form.Button color="green">Submit</Form.Button>
         </Form.Group> 
      </Form>
    )
  }
}
