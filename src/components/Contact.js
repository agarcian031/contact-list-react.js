import React from 'react'
import { Button, Table, Icon,} from 'semantic-ui-react';

const Contact = ({id, name, phone, remove}) => (
  <Table.Row> 
    <Table.Cell>
    <Icon name='user' circular align="center"/>
    </Table.Cell> 

    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="red" icon onClick={ () => remove(id)}>
        <Icon name="trash alternate"/> 
        Delete
      </Button>
      </Table.Cell>
</Table.Row>
)

// use an anonymous function () => to prevent a button or event from happening unless something is first passed in. 

export default Contact; 




