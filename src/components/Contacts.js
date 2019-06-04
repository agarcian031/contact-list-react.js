import React from 'react'
import Contact from './Contact'
import { Table,} from 'semantic-ui-react';

// Props will always come through as objects (key value pairs)
const Contacts = ({contactList,}) => (
  <Table celled padded>
    <Table.Header>
     <Table.Row>
      <Table.HeaderCell>Image</Table.HeaderCell>

        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body> 
        {
          contactList.map(contact => (
           <Contact key={contact.id} {...contact}/>
          ))
        }
      </Table.Body>
  </Table>

)

export default Contacts; 
