import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { feedApi } from "../modules/feed/api/repository";

export const store = configureStore({
    reducer: {
        [feedApi.reducerPath]: feedApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()