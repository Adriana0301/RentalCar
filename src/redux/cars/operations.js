import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const API = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export const getAllCars = createAsyncThunk(
  "getAllCars",
  async (
    { brand, rentalPrice, minMileage, maxMileage, limit, page = 1 },
    thunkAPI
  ) => {
    try {
      const params = {
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
        limit,
        page,
      };

      const { data } = await API.get("cars", { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "getCarById",
  async (id, thunkAPI) => {
    try {
      const { data } = await API.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBrands = createAsyncThunk("getBrands", async (_, thunkAPI) => {
  try {
    const { data } = await API.get("/brands");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
