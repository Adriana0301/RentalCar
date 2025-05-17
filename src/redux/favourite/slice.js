import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favourite",
  initialState: {
    cars: [],
  },
  reducers: {
    clickFavoriteCar: (state, action) => {
      const car = action.payload;
      if (!car || !car.id) return;

      const index = state.cars.findIndex((item) => item?.id === car.id);
      if (index !== -1) {
        state.cars.splice(index, 1);
      } else {
        state.cars.push(car);
      }
    },
  },
});

export const { clickFavoriteCar } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
