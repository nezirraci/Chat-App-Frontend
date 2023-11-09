import axiosInstance from "../axiosInterceptors/axiosInstance";
const AuthService = {};

AuthService.login = async function (username,password) {
    
    try{

       var  result= await axiosInstance.post('/Auth/Login',{
            Email: username,
            Password: password
        });
          
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

AuthService.logOut = async function (userId) {

return await axiosInstance.post('/Auth/Logout');
    
}

AuthService.Register=async function(User) {
    console.log(User,"USER");
    var formData=new FormData();

    formData.append('Email',User.Email);
    formData.append('Name',User.Name);
    formData.append('Surname',User.Surname);
    formData.append('Password',User.Password);
    formData.append('Photo',User.photo);
    formData.append('picture',User.File);

    try{
        var result= await axiosInstance.post('/Auth/Register',formData);
        return {
            Succeded:true,
            StatusCode:result.data.statusCode,
            Data:result.data.data
        }
    }
    catch(error) {

        return {
            Succeded:false,
            StatusCode:error.response.data.statusCode,
            Data:error.response.data.data
        }

    }

    
}

AuthService.EditUser=async function(user) {

    try{
        var result= await axiosInstance.post('/Auth/EditUser',user);
        return {
            Succeded:true,
            StatusCode:result.data.statusCode,
            Data:result.data.data
        }
    }
    
    catch(error) {

        return {
            Succeded:false,
            StatusCode:error.response.data.statusCode,
            Data:error.response.data.data
        }

    }
}

AuthService.ChangeProfilePicture=async function(file) {
    const formData=new FormData();
    formData.append("UserId",file.UserId);
    formData.append("Photo",file.Photo);
    try{
        var result= await axiosInstance.post('/Auth/ChangeProfilePicture',formData);
        return {
            Succeded:true,
            StatusCode:result.data.statusCode,
            Data:result.data.data
        }
    }
    
    catch(error) {

        return {
            Succeded:false,
            StatusCode:error.response.data.statusCode,
            Data:error.response.data.data
        }

    }
   
}

AuthService.ChangePassword=async function(passwordData) {

    try{
        var result= await axiosInstance.post('/Auth/ChangePassword',passwordData);
        return {
            Succeded:true,
            StatusCode:result.data.statusCode,
            Data:result.data.data
        }
    }
    
    catch(error) {

        return {
            Succeded:false,
            StatusCode:error.response.data.statusCode,
            Data:error.response.data.data
        }

    }
}

export default AuthService