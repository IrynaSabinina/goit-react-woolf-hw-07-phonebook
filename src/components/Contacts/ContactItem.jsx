import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

export const ContactItem = ({ id, name, phone, contactDelete }) => {
  return (
    <li className={styles.item}>
      {name} : {phone}
      <button
        className={styles.btnDel}
        type="button"
        onClick={() => contactDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
