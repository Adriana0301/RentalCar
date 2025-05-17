import { useDispatch, useSelector } from "react-redux";
import CarList from "../../components/CarList/CarList";
import { Container } from "../../components/Container/Container";
import { Section } from "../../components/Section/Section";
import {
  selectCarsBrands,
  selectIsLoading,
  selectPage,
} from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { API, getAllCars, getBrands } from "../../redux/cars/operations";
import { Loader } from "../../components/Loader/Loader";
import s from "./CatalogPage.module.css";
import { fetchFilteredCars } from "../../redux/filter/operations";

// import svgDown from "../../../public/Property-1Default.svg";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const brands = useSelector(selectCarsBrands);
  const [rentalPrices, setRentalPrices] = useState([]);

  useEffect(() => {
    const fetchRentalPrices = async () => {
      try {
        const { data } = await API.get("/cars");
        const prices = data.cars.map((car) => Number(car.rentalPrice));
        const uniquePrices = [...new Set(prices)].sort((a, b) => a - b);
        setRentalPrices(uniquePrices);
      } catch (error) {
        console.error("Error fetching rental prices:", error);
      }
    };

    fetchRentalPrices();
  }, []);

  const [filters, setFilters] = useState({
    brand: "",
    rentalPriceMax: "",
    mileageFrom: "",
    mileageTo: "",
  });

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchFilteredCars({
        brand: filters.brand || undefined,
        rentalPriceMax: filters.rentalPriceMax
          ? +filters.rentalPriceMax
          : undefined,
        mileageFrom: filters.mileageFrom ? +filters.mileageFrom : undefined,
        mileageTo: filters.mileageTo ? +filters.mileageTo : undefined,
      })
    );
  };
  useEffect(() => {
    dispatch(getAllCars({ page: currentPage, limit: 12, filters: {} }));
  }, [dispatch, currentPage]);

  if (isLoading) return <Loader />;
  return (
    <Section secClass={s.section}>
      <Container contClass={s.container}>
        <form className={s.filterForm} onSubmit={handleFilterSubmit}>
          <label className={s.label}>
            Car brand
            <select
              name="brand"
              value={filters.brand}
              onChange={handleFilterChange}
              className={s.brand}
            >
              <option className={s.option} value="">
                Choose a brand
              </option>
              {brands.map((brand) => (
                <option className={s.option} key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
          <label className={s.label}>
            Price/ 1 hour
            <select
              className={s.brand}
              name="rentalPriceMax"
              value={filters.rentalPriceMax}
              onChange={handleFilterChange}
            >
              <option className={s.option} value="">
                Choose a price
              </option>
              {rentalPrices.map((price) => (
                <option className={s.option} key={price} value={price}>
                  {price} $
                </option>
              ))}
            </select>
          </label>
          <div className={s.label}>
            <label>Car mileage / km</label>
            <div>
              <input
                type="number"
                name="mileageFrom"
                placeholder="From"
                value={filters.mileageFrom}
                onChange={handleFilterChange}
                min="0"
                className={s.fromTo1}
              />
              <input
                type="number"
                name="mileageTo"
                placeholder="To"
                value={filters.mileageTo}
                onChange={handleFilterChange}
                min="0"
                className={s.fromTo2}
              />
            </div>
          </div>
          <button type="submit">Search</button>
        </form>

        <CarList filters={filters} />
      </Container>
    </Section>
  );
};
export default CatalogPage;
