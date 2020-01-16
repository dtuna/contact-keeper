import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) return <h4>Please add a contact</h4>;

  const decideContactList = () => {
    return filtered !== null ? filtered : contacts;
  };

  return (
    <Fragment>
      <TransitionGroup>
        {decideContactList().map(contact => (
          <CSSTransition key={contact.id} timeout={200} classNames='item'>
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
