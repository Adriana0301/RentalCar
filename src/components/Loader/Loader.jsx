import { Triangle } from "react-loader-spinner";
import s from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={s.LoaderWrapper}>
      <Triangle
        visible={true}
        height="150"
        width="150"
        color="#3470ff"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};
