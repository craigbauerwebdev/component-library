import { useContext } from "react";
import NavigationContext from "../../Context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (e) => {
    //console.log(e);
    if (e.ctrlKey || e.metaKey) {
      console.log("holding down key");
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
