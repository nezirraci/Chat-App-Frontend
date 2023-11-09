import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedChatRoom:null
};

const chatRoomsSlice = createSlice({
  name: 'chatrooms',
  initialState,
  reducers: {
    AddChatRoom:(state,action) => {
      var newChatRoom=action.payload;
      state["ChatRoom"+newChatRoom.id]=newChatRoom
    },
    LoadChatRooms:(state,action)=> {
      var chatRooms=action.payload;
      for(const newChatRoom of chatRooms) {
        state["ChatRoom"+newChatRoom.id]=newChatRoom;
      }
    },
    setSelectedChatRoom:(state,action)=> {
      var chatRoom=action.payload;
      state.selectedChatRoom=chatRoom;
    }
  },
    extraReducers(builder) {

    }
});

export const {AddChatRoom,LoadChatRooms,setSelectedChatRoom} = chatRoomsSlice.actions;
export default chatRoomsSlice.reducer;