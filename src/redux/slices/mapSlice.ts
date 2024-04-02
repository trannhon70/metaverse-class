import { createSlice } from "@reduxjs/toolkit";

export interface MapState {
  isLoading: boolean;
}

const initialState: MapState = {
  isLoading: false,
};

export const MapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setLoading } = MapSlice.actions;

export default MapSlice.reducer;
