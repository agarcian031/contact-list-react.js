import React, { Component } from 'react'
import {Form} from 'semantic-ui-react'; 

export default class ContactForm extends Component {
  state = { name: "", phone: "", }; 

  handleChange = (e) => {
    // switch(e.target.name) {
    //   case "name": 
    //   this.setState({name: e.target.value})
    //   break 
    //   case "phone": 
    //   this.setState({phone: e.target.value})
    //   break
    // }
    this.setState({[e.target.name]: e.target.value, })

  };
  render() {
    return (
      <Form>
       <Form.Group widths="equal">
         <Form.Field inline>
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
         <Form.Button color="green" fluid>Submit</Form.Button>
         </Form.Field>
         </Form.Group> 
      </Form>
    )
  }
}
