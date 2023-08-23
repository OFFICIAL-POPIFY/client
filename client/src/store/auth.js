
import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false,
    accessToken: null,
  refreshToken: null,
}
const authSlice  = createSlice({
    name: 'auth',
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            state.isAuthenticated = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            
        },
        logout(state,action){
            state.isAuthenticated = false;
            state.accessToken = null;
            state.refreshToken = null;
        }
        ,
        signup(state,action){
            state.isAuthenticated = true;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        }
        ,
        userName(state,action){
            state.userName = action.payload.userName;
        }
        ,
        userPassword(state,action){
            state.userPassword = action.payload.userPassword;
        }
    }

})

export const authActions = authSlice.actions;


export default authSlice.reducer;