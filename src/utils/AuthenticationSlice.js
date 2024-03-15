import {createSlice} from '@reduxjs/toolkit'

const AuthenticationSlice = createSlice({
    name:"Authentication",
    initialState:{
       user:null,
    },
    reducers:{
        AddUser:(state,action)=>{
            return action.payload
        },
        RemoveUser:(state,action)=>{ return null}
    }
})

export const {AddUser, RemoveUser}= AuthenticationSlice.actions
export default AuthenticationSlice.reducer