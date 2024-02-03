import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface IUser {
    user: User
}

const initialState: IUser = {
    user: {} as User
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
        }
    }
})


export const { getUser } = userSlice.actions
export default userSlice.reducer