import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { deleteContact } from 'redux/operations';
import css from './my-contact-item.module.scss';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contacts__item}>
      <p className={css.contacts__data}>
        <span>
          {name}: {phone}
        </span>
        <button
          type="button"
          className={css.btnDel}
          onClick={handleDeleteContact}
        >
          Delete
          <TiUserDeleteOutline size="16" className={css.icon} />
        </button>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// //import { TiUserDeleteOutline } from 'react-icons/ti';
// //import { useState } from 'react';
// import {deleteContact} from "redux/operations";
// import css from './my-contact-item.module.scss';

// //phone
// export const ContactItem = ({ id, name, phone}) => {
//   const dispatch = useDispatch();

//   return (
//     <li className={css.contacts__item}>
//       <p className={css.contacts__data}>
//         <span>
//           {name}: {phone}
//         </span>
//         <button type="button" className={css.btnDel} onClick={() => dispatch(deleteContact(id))}>
//           Delete
//         </button>
//       </p>
//     </li>
//   );
// };

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };
