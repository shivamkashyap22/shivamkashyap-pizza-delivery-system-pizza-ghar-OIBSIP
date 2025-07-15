import PropTypes from 'prop-types';

function Button({
  variant,
  children,
  className: additionalClassNames,
  ...props
}) {
  let classes = '';

  switch (variant) {
    case 'primary':
      classes = 'bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 my-2';
      break;
    case 'secondary':
      classes = 'bg-white hover:bg-gray-100 text-yellow-500 py-3 px-4 my-2';
      break;
    case 'outline':
      classes =
        'bg-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white border-2 border-yellow-500 py-3 px-4 my-2 transition-all duration-300';
      break;
    case 'danger':
      classes = 'bg-red-500 hover:bg-red-600 text-white py-3 px-4 my-2';
      break;
    default:
      classes = 'bg-yellow-500 hover:bg-yellow-600 py-3 px-4 my-2';
      break;
  }

  if (additionalClassNames) {
    classes += ` ${additionalClassNames}`;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
