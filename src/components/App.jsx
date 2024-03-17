import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../components/Form/Form';
import { ContactsList } from './Contacts/ContactsList';
import { FindElement } from './FindElement/FindElement';
import { useEffect } from 'react';
import { getContactsThunk } from '../redux/thunks/thunks';
import { contactsSelector } from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(contactsSelector);
   const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  console.log("1")


  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <FindElement />
      <ContactsList />
    </div>
  );
};

