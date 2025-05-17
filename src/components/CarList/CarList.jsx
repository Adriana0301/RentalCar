import CarListItem from "../CarListItem/CarListItem";
import s from "./CarList.module.css";
import LoardMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectAllCars, selectIsLoading } from "../../redux/cars/selectors";
import { Loader } from "../Loader/Loader";

const CarList = () => {
  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsLoading);
  const firstCardRef = useRef(null);

  useEffect(() => {
    if (cars.length > 12) {
      const { height } = firstCardRef.current.getBoundingClientRect();
      window.scrollBy({
        top: height * 2,
        behavior: "smooth",
      });
    }
  }, [cars]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.wrapper}>
      <ul className={s.carList}>
        {cars.map((car, idx) => (
          <CarListItem
            key={`${car.id + idx}`}
            car={car}
            ref={idx === 0 ? firstCardRef : null}
          />
        ))}
      </ul>
      <LoardMoreBtn />
    </div>
  );
};

export default CarList;
