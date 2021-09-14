import { createSlice } from "@reduxjs/toolkit";

const initialMaximizeState = {
  locked: false,
  unlock: true,
};
const LockButtonSlice = createSlice({
  name: "locked",
  initialState: initialMaximizeState,
  reducers: {
    locked(state) {
      state.locked = true;
      state.unlock = false;
    },
    unlock(state) {
      state.locked = false;
      state.unlock = true;
    },
  },
});

export const lockActions = LockButtonSlice.actions;

export default LockButtonSlice.reducer;
