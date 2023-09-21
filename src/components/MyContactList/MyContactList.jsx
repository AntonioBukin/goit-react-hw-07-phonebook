import { useSelector } from 'react-redux';
import css from './my-contact-list.module.scss';
import { selectAllContacts } from 'redux/selectors';
import { ContactItem } from 'components/MyContactItem/MyContactItem';

function ContactList() {
  const filteredContacts = useSelector(selectAllContacts);

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} name={name} phone={phone} />
      ))}
    </ul>
  );
}

export default ContactList;
