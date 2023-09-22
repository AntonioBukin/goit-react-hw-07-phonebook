import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './my-contact-item.module.scss';

//phone
export const ContactItem = ({ name, phone}) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contacts__item}>
      <p className={css.contacts__data}>
        <span>
          {name}: {phone}
        </span>
        <button className={css.btnDel} onClick={() => dispatch(useDispatch)}>
          Delete
        </button>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
