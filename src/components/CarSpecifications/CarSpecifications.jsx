import s from "./CarSpecifications.module.css";
import calendar from "../../../public/calendar.svg";
import carSvg from "../../../public/car.svg";
import fuel from "../../../public/fuel-pump.svg";
import gear from "../../../public/gear.svg";
const CarSpecifications = ({ car }) => {
  return (
    <>
      <h2 className={s.title}>Car Specifications:</h2>
      <div className={s.carSpecifications}>
        <div className={s.carWrapper}>
          <img src={calendar} height="16" weight="16" alt="Calendar" />
          <p className={s.carText}>Year: {car.year}</p>
        </div>
        <div className={s.carWrapper}>
          <img src={carSvg} height="16" weight="16" alt="Car" />
          <p className={s.carText}>Type: {car.type}</p>
        </div>
        <div className={s.carWrapper}>
          <img src={fuel} height="16" weight="16" alt="Fuel" />
          <p className={s.carText}>Fuel Consumption: {car.fuelConsumption}</p>
        </div>
        <div className={s.carWrapper}>
          <img src={gear} height="16" weight="16" alt="Gear" />
          <p className={s.carText}>Engine Size: {car.engineSize}</p>
        </div>
      </div>
    </>
  );
};
export default CarSpecifications;
