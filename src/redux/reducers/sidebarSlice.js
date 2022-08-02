import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarActive: true,
  wrapperActive: true,
};

const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleWrapperActive(state) {
      state.wrapperActive = !state.wrapperActive;
    },
  },
});

export const { toggleWrapperActive, toggleTaskCompleted } = SidebarSlice.actions;

export default SidebarSlice.reducer;
