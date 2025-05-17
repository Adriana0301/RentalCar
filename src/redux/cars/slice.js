import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllCars, getBrands, getCarById } from "./operations";

const initialState = {
  brands: [],
  cars: [],
  page: 1,
  totalPages: null,
  details: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    setCars(state, action) {
      state.items = action.payload;
    },
    resetFilters(state) {
      state.cars = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (state.page === 1) {
          state.cars = payload.cars;
        } else {
          state.cars = [...state.cars, ...payload.cars];
        }

        state.totalPages = payload.totalPages;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.brands = payload;
      })
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.details = payload;
      })
      .addMatcher(
        isAnyOf(getAllCars.pending, getBrands.pending, getCarById.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getAllCars.rejected, getBrands.rejected, getCarById.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload || null;
        }
      );
  },
});

export const { nextPage } = carsSlice.actions;
export const { setCars, resetFilters } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
