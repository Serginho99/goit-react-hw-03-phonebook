import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Item, Text, BtnDelete } from './ContactItem.styled';

export default function ContactItem({ name, number, removeContact, id }) {
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <BtnDelete type="button" onClick={() => removeContact(id)}>
        <RiDeleteBinLine />
      </BtnDelete>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  removeContact: PropTypes.func,
};
