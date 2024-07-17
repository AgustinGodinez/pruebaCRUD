import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./types";

const apiUrl = "https://gorest.co.in/public/v2/users";
const apiKey =
  "ec1385c7814f73613464610424390484e6099e65b9d39237c1e3e949b8eea8d6";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
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

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id: number) => {
    try {
      await axiosInstance.delete(`/${id}`);
      return id;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return isRejectedWithValue(error.response.data);
      } else {
        return isRejectedWithValue("An unknown error occurred");
      }
    }
  }
);
export const createUser = createAsyncThunk(
  'users/createUser',
  async (user: Omit<User, 'id'>, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('', user);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Error response data:', error.response.data);
        return rejectWithValue(error.response.data);
      } else {
        console.error('Unknown error:', error);
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);