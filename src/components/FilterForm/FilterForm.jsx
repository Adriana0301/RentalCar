import { useDispatch, useSelector } from "react-redux";
import { selectCarsBrands } from "../../redux/cars/selectors";
import { useState } from "react";
import { API } from "../../redux/cars/operations";
import { fetchFilteredCars } from "../../redux/filter/operations";

const CarFilter = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectCarsBrands);

  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    mileage_from: "",
    mileage_to: "",
  });
  const handleFilter = () => {
    dispatch(fetchFilteredCars(filters)); // Викликаємо асинхронну дію
  };
  return (
    <div>
      <div>
        {/* Вибір бренду */}
        <select
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        >
          <option value="">Choose a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        >
          <option value="">Choose a price</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>

        {/* Пробіг */}
        <input
          type="number"
          placeholder="From"
          onChange={(e) =>
            setFilters({ ...filters, mileage_from: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="To"
          onChange={(e) =>
            setFilters({ ...filters, mileage_to: e.target.value })
          }
        />

        <button onClick={handleFilter}>Search</button>
      </div>
    </div>
  );
};

export default CarFilter;
