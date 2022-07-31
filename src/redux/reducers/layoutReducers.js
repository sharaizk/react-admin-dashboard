import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    sidebarToggle: false,
  },
  reducers: {
    toggle: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
  },
});

export const { toggle } = layoutSlice.actions;
export default layoutSlice.reducer;
