import {  createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
   loadChatRoomMessages:(state,action)=> {
    const data=action.payload;
    state[data.ChatRoomId]=data.Messages;
   },
   AddChatRoomMessage:(state,action)=> {
    const data=action.payload;
    state[data.ChatRoomId]=[...state[data.ChatRoomId],data.Message]
   }
  },
    extraReducers(builder) {

    }
});

export const {  loadChatRoomMessages,AddChatRoomMessage} = messagesSlice.actions;
export default messagesSlice.reducer;