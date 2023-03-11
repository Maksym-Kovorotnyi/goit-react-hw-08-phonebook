import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from 'redux/Contacts/contactsSelector';
import { filterContacts } from 'redux/Contacts/contactsSlice';
import css from './Filter.module.css'

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectContactsFilter);
    
   
    return <>
        <label className={css.label} htmlFor="text">Find contact by name</label>
        <input
            className={css.input}
            onChange={e => dispatch(filterContacts(e.target.value))}
            type="text"
            value={filter}
        
        />
    
    </>
}

