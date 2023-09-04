import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("/post/fetchdata", async () => {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
    headers: {
      "X-RapidAPI-Key": "35360dea7cmshdbe7fec6300c773p10ff91jsnf1424cb37790",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data;
});

const createReducer = createSlice({
  name: "post",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
        state.error = "error";
      });
  },
});

export default createReducer;
