import { configureStore } from '@reduxjs/toolkit';
import authReducer from './storeslices/authSlice';
import uiReducer from './storeslices/uiSlice';
import contactsReducer from './storeslices/contactsSlice';
import chatRoomsReducer from './storeslices/chatRoomsSlice';
import messagesReducer from './storeslices/messagesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    contacts:contactsReducer,
    chatRooms: chatRoomsReducer,
    messages:messagesReducer
  },
});