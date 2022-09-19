import PropTypes from 'prop-types';
import ContactItem from 'components/contactItem/ContactItem';
import { TitleList, SearchInput, ContactList } from './ContactList.styled';

export default function ContactsList({
  contacts,
  value,
  onChange,
  deleteContact,
}) {
  return (
    <>
      <TitleList>Contacts</TitleList>
      <SearchInput type="text" value={value} onChange={onChange} />
      <ContactList>
        {contacts.map(({ name, id, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              removeContact={() => deleteContact(id)}
            />
          );
        })}
      </ContactList>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};
