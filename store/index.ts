import { configureStore, createSlice } from '@reduxjs/toolkit';

interface State {
  icon: string;
}

const initialState: State = {
  icon: 'moon',
};

// create a slice
export const iconslice = createSlice({
  name: 'icon',
  initialState,
  reducers: {
    iconMoon: () => {
      initialState.icon = 'moon';
    },
    iconSun: () => {
      initialState.icon = 'sun';
    },
  },
});
// config the store
const store = configureStore({
  reducer: {
    icon: iconslice.reducer,
  },
});

// export default the store
export default store;

// export the action
export const iconAction = iconslice.actions;
