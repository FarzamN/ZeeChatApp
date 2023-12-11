import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) { },
        removeUser(state, action) { },
        clearAllUser(state, action) { },
    }
})

