import propTypes from "prop-types";
import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest //remaining props objects
}) {
  const classes = twMerge(
    className(rest.className, "flex items-center p-3 text-lg border-2 my-2", {
      "bg-blue-900 border-blue-900 text-white": primary,
      "bg-gray-900 border-gray-900 text-white": secondary,
      "bg-green-900 border-green-900 text-white": success,
      "bg-orange-900 border-orange-900 text-white": warning,
      "bg-red-900 border-red-900 text-white": danger,
      "rounded-lg": rounded,
      "bg-white": outline,
      "text-blue-500 border-blue-900": outline && primary,
      "text-gray-500 border-gray-900": outline && secondary,
      "text-green-500 border-green-900": outline && success,
      "text-orange-500 border-orange-900": outline && warning,
      "text-red-500 border-red-900": outline && danger,
    })
  );
  return (
    <div className="button">
      <button {...rest} className={classes}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  // using PropTypes -> change to: TypeScript
  primary: propTypes.bool,
  secondary: propTypes.bool,
  success: propTypes.bool,
  warning: propTypes.bool,
  danger: propTypes.bool,
  outline: propTypes.bool,
  rounded: propTypes.bool,
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
