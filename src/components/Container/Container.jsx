import s from "./Container.module.css";

export const Container = ({ children, contClass }) => {
  return <div className={`${s.container} ${contClass}`}>{children}</div>;
};
