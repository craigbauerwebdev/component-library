/* import { useContext } from "react";
import NavigationContext from "../../Context/navigation"; */
import classNames from "classnames";
import useNavigation from "../../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const handleClick = (e) => {
    //console.log(e);
    if (e.ctrlKey || e.metaKey) {
      console.log("holding down key");
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  const classes = classNames(
    "text-sky-600",
    className,
    to === currentPath && activeClassName
  );
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
