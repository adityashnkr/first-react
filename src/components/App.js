import React, { useState, useEffect } from 'react';
import './App.css';
import {uuid} from 'uuidv4'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id:uuid(), ...contact}]); //... operator (Spread Syntax) expands array into individual elements
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(()=>{
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    if (retriveContact) setContacts(retriveContact)
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className="container">
      <Header/>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
