import s from "./Section.module.css";

export const Section = ({ children, secClass }) => {
  return <section className={`${s.section} ${secClass}`}>{children}</section>;
};
