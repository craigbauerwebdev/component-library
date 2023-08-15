import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const mergedClasses = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={mergedClasses}>
      {children}
    </div>
  );
}

export default Panel;
