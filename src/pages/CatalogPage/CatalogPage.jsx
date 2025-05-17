import { useDispatch, useSelector } from "react-redux";
import CarList from "../../components/CarList/CarList";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import { selectIsLoading, selectPage } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { API, getAllCars, getBrands } from "../../redux/cars/operations";
import { Loader } from "../../components/Loader/Loader";
import s from "./CatalogPage.module.css";
// import { fetchFilteredCars } from "../../redux/filter/operations";
import Filters from "../../components/Filters/Filters";
import { resetFilters } from "../../redux/filter/slice";

// import svgDown from "../../../public/Property-1Default.svg";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(getAllCars({ page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);
  if (isLoading) return <Loader />;
  return (
    <Section secClass={s.section}>
      <Container contClass={s.container}>
        <Filters />
        <CarList />
      </Container>
    </Section>
  );
};
export default CatalogPage;
