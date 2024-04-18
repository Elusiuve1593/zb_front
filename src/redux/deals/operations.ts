import { toast } from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { fetchDealsReducer } from "./slice";

export interface DealInfo {
  subscription: string;
  price: number;
  tiket: number;
  yield$: number;
  daysLeft: number;
  sold: number;
  imageUrl: string;
}

const style = {
  borderRadius: "10px",
  background: "#333",
  color: "#fff",
  fontSize: "20px",
};

export const fetchDeals = createAsyncThunk(
  "deals/fetchDeals",
  async (param, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get<DealInfo[]>(`http://localhost:3001/deal`);
      console.log(res.data);
      dispatch(fetchDealsReducer({ data: res.data }));
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
  }
);
