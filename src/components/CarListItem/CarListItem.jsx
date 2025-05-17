import { forwardRef } from "react";
import Button from "../Button/Button";
import s from "./CarListItem.module.css";

const CarListItem = forwardRef(({ car }, ref) => {
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
  } = car;
  return (
    <li className={s.listItem} ref={ref}>
      <div className={s.wrapper}>
        <img src={img} alt="Car" className={s.listImage} />

        <div className={s.textWrapper}>
          <h2 className={s.listTitle}>
            {brand} <span className={s.listSpan}>{model}</span> {year}
          </h2>
          <p className={s.listTitle}>${rentalPrice}</p>
        </div>
        <div className={s.detailsWrapper}>
          <p className={s.details}>
            {address.split(", ").slice(1).join(" | ")} | {rentalCompany} |{" "}
          </p>
          <p className={s.details}>
            {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()} |{" "}
            {mileage.toLocaleString("uk-UA")} km
          </p>
        </div>
      </div>
      <Button to={`/catalog/${id}`} btnClass={s.buttonItem}>
        Read more
      </Button>
    </li>
  );
});
export default CarListItem;
