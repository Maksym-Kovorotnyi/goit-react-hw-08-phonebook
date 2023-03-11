import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/contactsThunk';
import { selectFilteredContacts } from 'redux/Contacts/contactsSelector';


export const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
   
  const dispatch = useDispatch();
  
    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
    
  
   
   return <>
        <ul>
            {filteredContacts.map(({ id, name, phone }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={phone}
            />)}
        </ul>
    </>
}

