import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchUsers } from "./utils";
import { UserStateProps } from "./types";

const initialState: UserStateProps = {
  users: [],
  loading: false,
  error: null,
  isModalShow: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    showModal(state, action) {
      state.isModalShow = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete user";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to create user";
      });
  },
});
export const { showModal } = userSlice.actions;

export default userSlice.reducer;
