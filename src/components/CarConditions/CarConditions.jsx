import s from "./CarConditions.module.css";
import svg from "../../../public/Group.svg";
const CarConditions = ({ car }) => {
  return (
    <>
      <h2 className={s.title}>Rental Conditions:</h2>
      <div className={s.carConditions}>
        <div className={s.imgText}>
          <img
            src={svg}
            height="10"
            weight="10"
            alt="Check circle"
            className={s.image}
          />
          <p>{car.rentalConditions[0]}</p>
        </div>
        <div className={s.imgText}>
          <img
            src={svg}
            height="16"
            weight="16"
            alt="Check circle"
            className={s.image}
          />
          <p>{car.rentalConditions[1]}</p>
        </div>{" "}
        <div className={s.imgText}>
          <img
            src={svg}
            height="16"
            weight="16"
            alt="Check circle"
            className={s.image}
          />
          <p>{car.rentalConditions[2]}</p>
        </div>
      </div>
    </>
  );
};
export default CarConditions;
