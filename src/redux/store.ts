import actionSlice from "@/redux/slices/actionSlice";
import authSlice from "@/redux/slices/authSlice";
import map from "@/redux/slices/mapSlice";
import meetingRoomSlice from "@/redux/slices/meetingRoomSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    map,
    actionSlice,
    meetingRoomSlice,
    authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
