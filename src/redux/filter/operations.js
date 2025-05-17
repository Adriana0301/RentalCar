import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../cars/operations";

export const fetchFilteredCars = createAsyncThunk(
  "cars/fetchFilteredCars",
  async (filters, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/cars", { params: filters });
      return data.cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
