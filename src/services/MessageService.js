import axiosInstance from "../axiosInterceptors/axiosInstance";
const MessageService = {};




MessageService.SendMessage = async function (message) {
    
    try{
            
       var  result= await axiosInstance.post('/Messages/SendMessage',message);
          
        return {
            Succeded:true,
            StatusCode:result.data.statusCode,
            Data:result.data.data
        };
    }

    catch(error) {
        return {
            Succeded:false,
            StatusCode:error.response.data.statusCode,
            Data:error.response.data.data
        }
    }
}

MessageService.GetMessagesByChatRoomId = async function (request) {
    
    try{
            
       var  result= await axiosInstance.post('/Messages/GetChatRoomMessages',request);
          
        return {
            Succeded:true,
            StatusCode:result.data.statusCode,
            Data:result.data.data
        };
    }

    catch(error) {
        return {
            Succeded:false,
            StatusCode:error.response.data.statusCode,
            Data:error.response.data.data
        }
    }
}

MessageService.SendMessageFile = async function (request) {
    var formData=new FormData();
    formData.append('ChatRoomId',request.ChatRoomId);
    formData.append('SentByUserId',request.SentByUserId);
    formData.append('ReceivedByUserId',request.ReceivedByUserId);
    formData.append('DateTimeSent',request.DateTimeSent);
    formData.append('Type',request.Type);
    formData.append('File',request.File);
    formData.append('Content',request.Content);
    try{
            
       var  result= await axiosInstance.post('/Messages/SendMessageFile',formData);
          
        return {
            Succeded:true,
            StatusCode:result.data.statusCode,
            Data:result.data.data
        };
    }

    catch(error) {

        return {
            Succeded:false,
            StatusCode:error.response.data.statusCode,
            Data:error.response.data.data
        }
    }
}

export default MessageService;