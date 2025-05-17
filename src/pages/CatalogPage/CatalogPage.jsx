import { useDispatch, useSelector } from "react-redux";
import CarList from "../../components/CarList/CarList";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { selectIsLoading, selectPage } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { getAllCars, getBrands } from "../../redux/cars/operations";
import { Loader } from "../../components/Loader/Loader";
import s from "./CatalogPage.module.css";
import CarFilter from "../../components/FilterForm/FilterForm";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    dispatch(getAllCars({ page: currentPage, limit: 12 }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Section secClass={s.section}>
      <Container contClass={s.container}>
        <CarFilter />
        <CarList />
      </Container>
    </Section>
  );
};
export default CatalogPage;
