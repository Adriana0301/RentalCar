import { useDispatch, useSelector } from "react-redux";
import { selectCarsBrands } from "../../redux/cars/selectors";
import { Controller, useForm } from "react-hook-form";
import { getAllCars } from "../../redux/cars/operations";
import { addFilters } from "../../redux/filter/slice";
import s from "./Filters.module.css";
import { forwardRef } from "react";
import { NumericFormat } from "react-number-format";
import Select from "react-select";

import { customPrice } from "./customPrice";
import { customBrand } from "./customBrand";

const NumericFormatInput = forwardRef((props, ref) => {
  return <NumericFormat {...props} getInputRef={ref} />;
});

const Filters = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectCarsBrands);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      brand: "",
      price: null,
      mileageFrom: null,
      mileageTo: null,
    },
  });

  const brandOptions =
    brands?.map((brand) => ({ label: brand, value: brand })) || [];
  const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100].map((price) => ({
    label: price.toString(),
    value: price,
  }));

  const price = watch("price");

  const onSubmit = (data) => {
    dispatch(addFilters(data));

    const params = {};

    if (data.brand) params.brand = data.brand;
    if (data.price) params.rentalPrice = data.price;
    if (data.mileageFrom) params.minMileage = data.mileageFrom;
    if (data.mileageTo) params.maxMileage = data.mileageTo;

    dispatch(getAllCars(params));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.filterGroup}>
        <label className={s.label}>Car brand</label>
        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={brandOptions}
              placeholder="Choose a brand"
              isSearchable
              styles={customBrand}
              value={
                brandOptions.find((option) => option.value === field.value) ||
                null
              }
              onChange={(selected) => field.onChange(selected?.value || "")}
            />
          )}
        />
      </div>
      <div className={s.filterGroup}>
        <label className={s.label}>Price / 1 hour</label>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={priceOptions}
              getOptionLabel={(option) => option.label}
              formatOptionLabel={(option) =>
                price ? `To $${option.value}` : option.label
              }
              isSearchable
              styles={customPrice}
              value={
                priceOptions.find((option) => option.value === field.value) ||
                ""
              }
              placeholder="Choose a price"
              onChange={(selected) => field.onChange(selected?.value || "")}
            />
          )}
        />
      </div>
      <div className={s.filterGroup}>
        <label className={s.label}>Car mileage / km</label>
        <div className={s.mileageInputs}>
          <div className={s.mileageInputGroup}>
            <span className={s.mileageLabel}>From</span>
            <Controller
              name="mileageFrom"
              control={control}
              render={({ field }) => (
                <NumericFormatInput
                  value={field.value}
                  onBlur={field.onBlur}
                  name={field.name}
                  thousandSeparator
                  className={s.input}
                  onValueChange={({ floatValue }) => {
                    field.onChange(floatValue ?? null);
                  }}
                />
              )}
            />
          </div>
          <div className={s.mileageInputGroup}>
            <span className={s.mileageLabel}>To</span>
            <Controller
              name="mileageTo"
              control={control}
              render={({ field }) => (
                <NumericFormatInput
                  value={field.value}
                  onBlur={field.onBlur}
                  name={field.name}
                  thousandSeparator
                  className={s.input}
                  onValueChange={({ floatValue }) => {
                    field.onChange(floatValue ?? null);
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

export default Filters;
