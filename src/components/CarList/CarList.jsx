import CarListItem from "../CarListItem/CarListItem";
import s from "./CarList.module.css";
import LoardMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectAllCars } from "../../redux/cars/selectors";

const CarList = ({ filters }) => {
  const cars = useSelector(selectAllCars);
  const firstCardRef = useRef(null);

  const areFiltersApplied = Object.values(filters).some(
    (value) => value !== "" && value !== null && value !== undefined
  );

  const filteredCars = cars.filter((car) => {
    const rentalPriceNum = Number(car.rentalPrice);
    const mileageNum = Number(car.mileage);

    return (
      (filters.brand ? car.brand === filters.brand : true) &&
      (filters.rentalPriceMax
        ? rentalPriceNum === Number(filters.rentalPriceMax)
        : true) &&
      (filters.mileageFrom
        ? mileageNum >= Number(filters.mileageFrom)
        : true) &&
      (filters.mileageTo ? mileageNum <= Number(filters.mileageTo) : true)
    );
  });

  useEffect(() => {
    if (cars.length > 12) {
      const { height } = firstCardRef.current.getBoundingClientRect();
      window.scrollBy({
        top: height * 2,
        behavior: "smooth",
      });
    }
  }, [cars]);

  return (
    <div className={s.wrapper}>
      <ul className={s.carList}>
        {filteredCars.map((car, idx) => (
          <CarListItem
            key={`${car.id + idx}`}
            car={car}
            ref={idx === 0 ? firstCardRef : null}
          />
        ))}
      </ul>
      {!areFiltersApplied && <LoardMoreBtn />}
    </div>
  );
};

export default CarList;
