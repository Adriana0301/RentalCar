import { useParams } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { useDispatch, useSelector } from "react-redux";
import { selectCarDetails, selectIsLoading } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { getCarById } from "../../redux/cars/operations";
import s from "./CertainCarPage.module.css";
import { Loader } from "../../components/Loader/Loader";
import CarForm from "../../components/CarForm/CarForm";
import CarDetails from "../../components/CarDetails/CarDetails";
import CarConditions from "../../components/CarConditions/CarConditions";
import CarSpecifications from "../../components/CarSpecifications/CarSpecifications";
import CarAcFu from "../../components/CarAcFu/CarAcFu";

const CertainCarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarDetails);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  if (isLoading || !car) {
    return <Loader />;
  }

  return (
    <Section>
      <Container contClass={s.container}>
        <div className={s.imageForm}>
          <img src={car.img} alt="Car" className={s.carImage} />
          <CarForm />
        </div>
        <div className={s.details}>
          <CarDetails car={car} />
          <CarConditions car={car} />
          <CarSpecifications car={car} />
          <CarAcFu car={car} />
        </div>
      </Container>
    </Section>
  );
};
export default CertainCarPage;
