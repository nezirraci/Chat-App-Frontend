import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  backgroundFade:false,
  addContactModal:false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showAddContactModal: (state,action)=> {
        state.addContactModal=true;
        state.backgroundFade=true;
    },
    closeAddContactModal: (state,action)=> {
        state.addContactModal=false;
        state.backgroundFade=false;
    }
    // Other reducers go here
  },
    extraReducers(builder) {

    }
});

export const { showAddContactModal,closeAddContactModal } = uiSlice.actions;
export default uiSlice.reducer;