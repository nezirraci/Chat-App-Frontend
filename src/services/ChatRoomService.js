import axiosInstance from "../axiosInterceptors/axiosInstance";
const ChatRoomService = {};

ChatRoomService.CreateChatRoom = async function (request) {
     
    try{    
       var  result= await axiosInstance.post('/ChatRooms/CreateChatRoom',request);
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

ChatRoomService.GetAllChatRooms = async function (request) {
     
    try{    
       var  result= await axiosInstance.post('/ChatRooms/GetAllChatRooms',request);
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



export default ChatRoomService;