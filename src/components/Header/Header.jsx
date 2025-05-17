import { Container } from "../Container/Container.jsx";
import { Logo } from "../Logo/Logo.jsx";
import { Navigation } from "../Navigation/Navigation.jsx";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo></Logo>
        <Navigation></Navigation>
      </div>
    </header>
  );
};
