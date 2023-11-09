import axiosInstance from "../axiosInterceptors/axiosInstance";
const ContactService = {};

ContactService.CreateContact = async function (contact) {
    
    try{
            
       var  result= await axiosInstance.post('/Contacts/CreateContact',contact);
          
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

ContactService.GetAllContacts= async function(requestData) {
    console.log('requestData',requestData);
    try{   
        var  result= await axiosInstance.post('/Contacts/GetAllContacts',requestData);
           
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

ContactService.DeleteContact= async function(requestData) {
 
    try{   
        var  result= await axiosInstance.post('/Contacts/DeleteContact',requestData);
           
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



export default ContactService;