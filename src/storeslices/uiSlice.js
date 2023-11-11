import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  backgroundFade:false,
  addContactModal:false,
  showChatRoom:false
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
    },
    showChatRoom:(state,action) => {
      state.showChatRoom=true;
    },
    closeChatRoom:(state,action) => {
      state.showChatRoom=false;
    }
    // Other reducers go here
  },
    extraReducers(builder) {

    }
});

export const { showAddContactModal,closeAddContactModal,showChatRoom,closeChatRoom } = uiSlice.actions;
export default uiSlice.reducer;