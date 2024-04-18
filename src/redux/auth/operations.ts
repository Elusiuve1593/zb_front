import { toast } from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface AuthInfo {
  email: string;
  password: string;
}

interface CreateRegistrationParams {
  email: string;
  password: string;
}

const style = {
  borderRadius: "10px",
  background: "#333",
  color: "#fff",
  fontSize: "20px",
};

export const createRegistration = createAsyncThunk<
  AuthInfo,
  CreateRegistrationParams,
  {
    rejectValue: string;
  }
>("registration/createRegistration", async (param, { rejectWithValue }) => {
  try {
    const res = await axios.post<AuthInfo>(
      `http://localhost:3001/auth/registration`,
      param
    );
    toast.success("Registration is success!", { style });
    return res.data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<any>;
      if (axiosError.response?.data) {
        toast.error(axiosError.response?.data.message, { style });
      }
      if (axiosError.message === "Network Error") {
        toast.error(axiosError.message, { style });
      }
      return rejectWithValue(err.response?.data);
    }
    return rejectWithValue(err.message);
  }
});

export const createLogin = createAsyncThunk<
  AuthInfo,
  CreateRegistrationParams,
  {
    rejectValue: string;
  }
>("login/createLogin", async (param, { rejectWithValue }) => {
  try {
    const res = await axios.post<AuthInfo>(
      `http://localhost:3001/auth/authentication`,
      param
    );
    toast.success("Login is success!", { style });
    return res.data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<any>;
      if (axiosError.response?.data) {
        toast.error(axiosError.response?.data.message, { style });
      }
      if (axiosError.message === "Network Error") {
        toast.error(axiosError.message, { style });
      }
      return rejectWithValue(err.response?.data);
    }
    return rejectWithValue(err.message);
  }
});
