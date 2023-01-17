import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial';

const usersLice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, actions) => {
      state.users = actions.payload;
    },
  },
});

const { actions, reducer } = usersLice;
export const { setUsers } = actions;
export default reducer;
