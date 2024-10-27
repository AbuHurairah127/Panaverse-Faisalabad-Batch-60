import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  products: any[];
  error: null | string;
  loader: boolean;
}

const initialState: ProductState = {
  products: [],
  error: null,
  loader: false,
};

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const respAPi = await fetch("https://dummyjson.com/products");
      const respJson = await respAPi.json();
      console.log("🚀 ~ respJson:", respJson);
      return respJson.products;
    } catch (error: any) {
      return rejectWithValue(error.message as string);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log(action, "Action in reducte");
        state.products = [...state.products, ...action.payload];
        state.loader = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loader = false;
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.loader = true;
      });
  },
});

// Action creators are generated for each case reducer function

export default productSlice.reducer;

[["Apples", "Oranges"]];
