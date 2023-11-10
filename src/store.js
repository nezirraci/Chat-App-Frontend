import { configureStore } from '@reduxjs/toolkit';
import authReducer from './storeslices/authSlice';
import uiReducer from './storeslices/uiSlice';
import contactsReducer from './storeslices/contactsSlice';
import chatRoomsReducer from './storeslices/chatRoomsSlice';
import messagesReducer from './storeslices/messagesSlice'
import loggerMiddleware from './middleware/loggerMiddleware';
import webSocketMiddleware from './middleware/webSocketMiddleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    contacts:contactsReducer,
    chatRooms: chatRoomsReducer,
    messages:messagesReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([loggerMiddleware,webSocketMiddleware])}
});