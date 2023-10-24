import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APP } from '../actionTypes/actionTypes';
import { IAppConfiguration } from '../model/store.model';

/**
 * State initial application
 * @memberof Store
 */
const initialState: IAppConfiguration = {
    locale: 'en'
};

/**
 * Reducer chat
 * @memberof Store
 */
const appSlice = createSlice({
    name: APP,
    initialState,
    reducers: {
        setAppInfo: (state, action: PayloadAction<IAppConfiguration>) => {
            const { payload } = action;
            state = { ...payload };
        },
        setLocale: (state, action: PayloadAction<string>) => {
            state = { ...state, locale: action.payload };
        },
    },
});

export const { setAppInfo, setLocale } = appSlice.actions;
export default appSlice.reducer;