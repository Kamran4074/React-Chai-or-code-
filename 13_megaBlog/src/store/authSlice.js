import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false, // is user logged in or not
    userData:null,    // user details or data
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true; // user is logged in
            state.userData = action.payload.userData; // assuming payload contains userData
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
        }
    }
});

export const{login,logout}=authSlice.actions;

export default authSlice.reducer;