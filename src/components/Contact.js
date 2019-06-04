import React from 'react'
import { Button, Table, Icon,} from 'semantic-ui-react';

const Contact = ({firstName, phone, }) => (
  <Table.Row> 
    <Table.Cell>
    <Icon name='user' circular align="center"/>
    </Table.Cell> 

    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="red" icon>
        <Icon name="trash alternate"/> 
        Delete
      </Button>
      </Table.Cell>
</Table.Row>
)

export default Contact; 




