import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filters: {
    brand: "",
    price: null,
    mileageFrom: null,
    mileageTo: null,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilters(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state.filters[key] = action.payload[key];
      });
    },
    resetFilters(state) {
      state.filters = { ...initialState.filters };
    },
  },
});

export const { addFilters, resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
