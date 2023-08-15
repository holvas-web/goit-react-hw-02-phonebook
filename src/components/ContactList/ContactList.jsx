import React from 'react';
import { Button } from './ContactList.styled';


export const ContactList = ({ contacts, deleteContact }) => (
  <ul
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid yellow',
    borderRadius: '8px',
    padding: '30 20',
    background: 'black',
    margin: '50px',
  }}
  >
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
      </li>
    ))}
  </ul>
);