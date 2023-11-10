import {HubConnectionBuilder} from '@microsoft/signalr'
import { AddChatRoomMessage } from '../storeslices/messagesSlice';


const webSocketMiddleware = store => next => action => {
    if(action.type=='auth/initiateSignalRConnection') {
            const connection = new HubConnectionBuilder()
            .withUrl("https://localhost:5000/Realtime",{ withCredentials: false,accessTokenFactory: () => store.getState().auth.token })
            .withAutomaticReconnect()
            .build();
            connection.start();
    console.log(connection,"CONNECTION");
    console.log(action);
    
    connection.on('ReceiveMessage',(message)=> {
        store.dispatch(AddChatRoomMessage({ChatRoomId:message.chatRoomId,Message:message}));
   
    });
    }

      return next(action)
   
  }

export default webSocketMiddleware;