import { Link } from "react-router-dom";
import logo from "../../../public/CarLogo.svg";
import s from "./Logo.module.css";

export const Logo = () => {
  return (
    <>
      <Link to="/" className={s.Logo}>
        <img src={logo} height="16" alt="Rental Car logo" />
      </Link>
    </>
  );
};
