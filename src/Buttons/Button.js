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
      <button>{children}</button>
    </div>
  );
}

Button.propTypes = {
  checkType: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return newError(
        "Only 1 type (primary, secondary, success, warning, danger) can be true"
      );
    }
  },
};

export default Button;
