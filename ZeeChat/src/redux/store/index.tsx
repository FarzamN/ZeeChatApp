import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/IncrimentSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
    reducer: {
        counter,
        userSlice,
    },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
