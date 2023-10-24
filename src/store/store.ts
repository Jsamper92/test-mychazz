import { configureStore } from '@reduxjs/toolkit';
import appSlice from './features/app';
import { IAppConfiguration } from './model/store.model';

/**
 * Defines the store that saves the global information of the application
 * @namespace Store
 */
export const store = configureStore({
    reducer: {
        app: appSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type IStore = {
    app: IAppConfiguration;
};
/**
 * This variable is used to get state data user
 * @param state - State reducer userSlice
 * @memberof Store
 */
export const getApp = (state: IStore) => state.app;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, products: ProductsState}
export type AppDispatch = typeof store.dispatch;
