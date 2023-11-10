import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  refreshToken: null,
  loading:null,
  error:null,
  isAuthenticated: false,
  userDetails: null,
  userStatus:null,
  signalRConnection:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUserData: (state, action) => {
      const payload=action.payload;
      state.token=payload.Data.token;
      state.refreshToken=payload.Data.refreshToken;
      state.isAuthenticated=true;
      state.userStatus="Available",
      state.userDetails=payload.Data.user;
    },
    resetState:(state,action)=> {
      state.token=null
      state.refreshToken=null
      state.loading=null
      state.error=null
      state.isAuthenticated=false
      state.userDetails=null
      state.userStatus=null
      state.signalRConnection=false;
    },
    changeUserDetails: (state,action)=> {
      const userData=action.payload;
      state.userDetails=userData;
    },
    changeUserStatus:(state,action) => {
      const payload=action.payload;
      state.userStatus=payload;
    },
    changeProfilePicture:(state,action) => {
      const photo=action.payload
      state.userDetails.photo=photo;
    },
    refreshToken: (state, action) => {
      const data=action.payload;
      state.token=data.newToken;
    },
    initiateSignalRConnection:(state,action) => {
      state.signalRConnection=true;
    }
    // Other reducers go here
  },
    extraReducers(builder) {

    }
});

export const { loadUserData,refreshToken,changeUserStatus,changeUserDetails,changeProfilePicture,resetState,initiateSignalRConnection } = authSlice.actions;
export default authSlice.reducer;