import { createSlice } from "@reduxjs/toolkit";
import { saveToken, getToken } from "redux/localstorage";
export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    sidebarToggle: false,
    theme: "light",
  },
  reducers: {
    toggle: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
    themeToggle: (state, action) => {
      state.theme = action.payload;
      saveToken(action.payload, "theme");
    },
    getLocalTheme: (state) => {
      const localTheme = getToken("theme") || "light";
      state.theme = localTheme;
    },
  },
});

export const { toggle, themeToggle, getLocalTheme } = layoutSlice.actions;
export default layoutSlice.reducer;
