import propTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return (
    <div className="button">
      {/* rounded-lg */}
      <button className="p-3 text-lg bg-blue-900 text-white my-3 border-2 border-blue-600">
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  // using PropTypes -> change to: TypeScript
  checkType: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only 1 type (primary, secondary, success, warning, danger) can be true"
      );
    }
  },
};

export default Button;
