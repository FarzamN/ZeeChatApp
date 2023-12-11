import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/IncrimentSlice';
// import UserSlice from './slices/UserSlice';

const store = configureStore({
    reducer: {
        counter,
        // UserSlice,
    },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
