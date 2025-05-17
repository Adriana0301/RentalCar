import s from "./CarDetails.module.css";
import location from "../../../public/Location.svg";
const CarDetails = ({ car }) => {
  return (
    <>
      <div className={s.mainWrapper}>
        <h2 className={s.title}>
          {car.brand} <span className={s.listSpan}>{car.model}</span>,{" "}
          {car.year}
        </h2>
        <p className={s.idCar}>id: {car.id.slice(0, 4)}</p>
      </div>
      <div className={s.AdMilWrapper}>
        <div className={s.location}>
          <img src={location} height="16" weight="16" alt="Location" />
          <p className={s.details}>
            {car.address.split(", ").slice(1).join(", ")}{" "}
          </p>
        </div>
        <p className={s.details}>Mileage: {car.mileage} km</p>
      </div>
      <p className={s.price}>${car.rentalPrice}</p>
      <p className={s.desc}>{car.description}</p>
    </>
  );
};
export default CarDetails;
