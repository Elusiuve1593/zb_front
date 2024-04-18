import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DealInfo } from "./operations";

const initialState: DealInfo[] = [];

const dealSlice = createSlice({
  name: "deal",
  initialState,
  reducers: {
    fetchDealsReducer(state, action: PayloadAction<{ data: DealInfo[] }>) {
      return action.payload.data;
    },
  },
});

export const { fetchDealsReducer } = dealSlice.actions;
export default dealSlice.reducer;
