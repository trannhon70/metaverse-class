import { createSlice } from "@reduxjs/toolkit";

export interface MeetingRoomState {
  isOpenMeeting: boolean;
  roomId: string | null;
}

const initialState: MeetingRoomState = {
  isOpenMeeting: false,
  roomId: null,
};

export const meetingRoomSlice = createSlice({
  name: "meeting-room",
  initialState,
  reducers: {
    setRoomId: (state, { payload }) => {
      state.roomId = payload;
    },
    setOpenMeeting: (state, { payload }) => {
      state.isOpenMeeting = payload;
    },
    reset: () => initialState,
  },
});

export const { setOpenMeeting, setRoomId } = meetingRoomSlice.actions;

export default meetingRoomSlice.reducer;
