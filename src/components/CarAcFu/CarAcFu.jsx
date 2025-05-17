import s from "./CarAcFu.module.css";
import svg from "../../../public/Group.svg";

const CarAcFu = ({ car }) => {
  return (
    <>
      <h2 className={s.title}>Accessories and functionalities:</h2>
      <div className={s.carAcFu}>
        <div className={s.wrapper}>
          <img
            src={svg}
            height="16"
            weight="16"
            alt="Check circle"
            className={s.img}
          />
          <p>{car.accessories[0]}</p>
        </div>
        <div className={s.wrapper}>
          <img
            src={svg}
            height="16"
            weight="16"
            alt="Check circle"
            className={s.img}
          />
          <p>{car.accessories[1]}</p>
        </div>{" "}
        <div className={s.wrapper}>
          <img
            src={svg}
            height="16"
            weight="16"
            alt="Check circle"
            className={s.img}
          />
          <p>{car.accessories[2]}</p>
        </div>
      </div>
      <div className={s.carAcFu}>
        <div className={s.wrapper}>
          <img
            src={svg}
            height="16"
            weight="16"
            alt="Check circle"
            className={s.img}
          />
          <p>{car.functionalities[0]}</p>
        </div>
        <div className={s.wrapper}>
          <img
            src={svg}
            height="16"
            weight="16"
            alt="Check circle"
            className={s.img}
          />
          <p>{car.functionalities[1]}</p>
        </div>{" "}
        <div className={s.wrapper}>
          <img
            src={svg}
            height="16"
            weight="16"
            alt="Check circle"
            className={s.img}
          />
          <p>{car.functionalities[2]}</p>
        </div>
      </div>
    </>
  );
};
export default CarAcFu;
