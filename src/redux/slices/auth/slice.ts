import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import axios from "axios";
import { IUser, Status } from "../../../@types/types";

const isAuth = JSON.parse(localStorage.getItem("isAuth") as string) || false;
const name = localStorage.getItem("name") || "";

export const login = createAsyncThunk(
  "auth/login",
  async ([name, password]: string[]) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = await axios.get<IUser[]>("./../public/users.json");

    const mockUser = response.data.find(
      (user) => user.password === password && user.username === name
    );

    if (mockUser) {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("name", name.toString());
      return name.toString();
    } else {
      throw new Error("ошибка");
    }
  }
);


const initialState: AuthState = {
  isAuth,
  name,
  status: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth(state) {
      state.isAuth = !state.isAuth;
    },
    addName(state, action) {
      state.name = action.payload;
    },
    logout(state){
        state.name = '';
        state.isAuth = !state.isAuth;
        localStorage.removeItem('isAuth')
        localStorage.removeItem('name')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.isAuth = true;
      state.name = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(login.pending, (state) => {
      state.status = Status.LOADING;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
