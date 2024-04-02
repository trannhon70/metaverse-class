import { createSlice } from "@reduxjs/toolkit";

export interface ActionState {
  isLoadingGame: boolean;
  activeAction: "CHAT_BOX" | "MEMBER" | null;
  isShowAdjustingAvatarModal: boolean;
  isShowEditNameModal: boolean;
  isShowQuestionModal: boolean;
  isShowQuizModal: boolean;
  isShowModalPassword: boolean;
  password: string;
  passwordOld: string;
  error:boolean

}

const initialState: ActionState = {
  isLoadingGame: true,
  activeAction: "MEMBER",
  isShowAdjustingAvatarModal: false,
  isShowEditNameModal: false,
  isShowQuestionModal: false,
  isShowQuizModal: false,
  isShowModalPassword: false,
  password:'',
  passwordOld: '',
  error: false
};

export const actionState = createSlice({
  name: "action",
  initialState,
  reducers: {
    setLoadingGame: (state, { payload }) => {
      state.isLoadingGame = payload;
    },
    setActionToChatBox: (state) => {
      state.activeAction = "CHAT_BOX";
    },
    setActionToMember: (state) => {
      state.activeAction = "MEMBER";
    },
    clearActiveAction: (state) => {
      state.activeAction = null;
    },
    setShowAdjustingAvatarModal: (state, { payload }) => {
      state.isShowAdjustingAvatarModal = payload;
    },
    setShowEditNameModal: (state, { payload }) => {
      state.isShowEditNameModal = payload;
    },
    setShowQuestionModal: (state, { payload }) => {
      state.isShowQuestionModal = payload;
    },
    setShowQuizModal: (state, { payload }) => {
      state.isShowQuizModal = payload;
    },
    setShowModalPassword: (state, {payload}) => {
      state.isShowModalPassword = payload
    },
    setPassword: (state, {payload}) => {
      state.password = payload
    },
    setPasswordOld: (state, {payload}) => {
      state.passwordOld = payload
    },
    setError: (state, {payload}) => {
      state.error = payload
    },
  },
});

export const {
  setActionToChatBox,
  setActionToMember,
  clearActiveAction,
  setShowAdjustingAvatarModal,
  setShowEditNameModal,
  setShowQuestionModal,
  setShowQuizModal,
  setLoadingGame,
  setShowModalPassword,
  setPassword,
  setPasswordOld,
  setError
} = actionState.actions;

export default actionState.reducer;
