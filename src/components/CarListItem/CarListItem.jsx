import { forwardRef } from "react";
import Button from "../Button/Button";
import s from "./CarListItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourite } from "../../redux/favourite/selectors";
import { clickFavoriteCar } from "../../redux/favourite/slice";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

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
  const favorite = useSelector(selectFavourite);
  const dispatch = useDispatch();
  const handleIsFavorite = () => {
    dispatch(clickFavoriteCar(car));
  };
  return (
    <li className={s.listItem} ref={ref}>
      <div className={s.wrapper}>
        <div className={s.wrapperAb}>
          <img src={img} alt="Car" className={s.listImage} />
          <button
            type="button"
            className={s.buttonFavourite}
            onClick={handleIsFavorite}
          >
            {favorite.some((fav) => fav && fav.id === id) ? (
              <IoMdHeart className={s.favoutite} />
            ) : (
              <IoMdHeartEmpty className={s.notFavotite} />
            )}
          </button>
        </div>
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
