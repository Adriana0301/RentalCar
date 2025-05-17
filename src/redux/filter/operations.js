import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../cars/operations";

export const fetchFilteredCars = createAsyncThunk(
  "cars/fetchFilteredCars",
  async ({ filters }, { rejectWithValue }) => {
    try {
      // Очищуємо filters від порожніх значень
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([, value]) => value !== "" && value != null
        )
      );

      // Додаємо page та limit до параметрів запиту
      const params = {
        ...cleanFilters,
      };

      const { data } = await API.get("/cars", { params });
      return data.cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
