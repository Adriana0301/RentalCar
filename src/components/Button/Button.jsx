import { Link } from "react-router-dom";
import s from "./Button.module.css";
const Button = ({ children, to, btnClass }) => {
  return (
    <Link className={`${s.button} ${btnClass}`} to={to}>
      {children}
    </Link>
  );
};

export default Button;
