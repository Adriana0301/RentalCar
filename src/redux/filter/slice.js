import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredCars } from "./operations";

const initialState = {
  brand: "",
  rentalPriceMax: "",
  mileageFrom: "",
  mileageTo: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetFilters() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchFilteredCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
