import { configureStore } from '@reduxjs/toolkit';

import sidebarSlice from './reducers/sidebarSlice';
import foldersSlice from './reducers/foldersSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    folders: foldersSlice,
  },
});
