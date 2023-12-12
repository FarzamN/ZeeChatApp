import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/IncrimentSlice';
import userSlice from './slices/UserSlice'; // Import your userSlice here

const store = configureStore({
    reducer: {
        counter,
        userSlice, // Add the userSlice to your reducers
    },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
