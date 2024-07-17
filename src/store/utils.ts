import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://gorest.co.in/public/v2/users";
const apiKey =
  "ec1385c7814f73613464610424390484e6099e65b9d39237c1e3e949b8eea8d6";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axiosInstance.get("");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return isRejectedWithValue(error.response.data);
    } else {
      return isRejectedWithValue("An unknown error occurred");
    }
  }
});
