import PropTypes from 'prop-types';

import { useNavigate, Link } from 'react-router-dom';

const LinkButton = ({ children, to, type }) => {
  const navigate = useNavigate();
  const style = {
    link: 'text-sm text-blue-500 hover:text-blue-600 hover:underline',
    customButton:
      'text-lg bg-indigo-700 rounded-full inline-block px-4 py-3 uppercase font-semibold text-white',
  };

  if (to === '-1')
    return (
      <button
        className={style[type]}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        {children}
      </button>
    );

  return (
    <Link to={to} className={style[type]}>
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default LinkButton;
