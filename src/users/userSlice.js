import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUsersToLocal } from "../local/local";






export const userSlice = createSlice({
name:'userSlice',
initialState:{
    users: getUserFromLocal()
},

reducers:{
    setUser : (state,action) => {
        const idx = state.users.findIndex(u => u.id === action.payload.id);
        if (idx !== -1) {
            state.users[idx] = action.payload;
        } else {
            state.users.push(action.payload);
        }
        setUsersToLocal(state.users);
    },
    removeUser:(state,action) =>{
        state.users.splice(action.payload,1);
         setUsersToLocal(state.users);
    }
}


});


export const {setUser,removeUser} = userSlice.actions;