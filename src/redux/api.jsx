import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";

// export interface CounterState {
//   message: string;
//   data: any;
//   isSuccess: boolean;
//   loading: boolean;
// }

const initialState = {
  message: "",
  data: [],
  isSuccess: false,
  loading: false,
};

export const getData = createAsyncThunk(
  "fetch/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const fetchedData = await axios.request({
        method: "GET",
        url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
        params: { query: arg },
        headers: {
          "X-RapidAPI-Key":
            "40adfff86amshae63704e562067ap186c63jsnff5b3c3286a4",
          "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
        },
      });

      return fetchedData;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getData.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = fetchSlice.actions;

export default fetchSlice;
