import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import {
  setActionToChatBox,
  setActionToMember,
  setShowAdjustingAvatarModal,
  setShowEditNameModal,
} from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import classNames from "classnames";
import { FaUserFriends } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Emoji from "./Emoji";
import MainMenu from "./MainMenu";
import Recording from "./Recording";
import { useCheckPath } from "@/hooks/useCheckPath";

const Tool = () => {
  const dispatch = useDispatch();
  const { players, playerId } = useGamePlayContext();
  const isXmas = useCheckPath({str:'xmas'})
  const activeAction = useSelector(
    (state: RootState) => state.actionSlice.activeAction
  );
  return (
    <div className={`${isXmas && 'fixed bottom-0'} h-16 bg-[#202540] z-30 w-full border-gray-100/20 flex justify-between items-center px-10`}>
      <div className="flex gap-2">
        <MainMenu />
        <div className="h-10 w-[200px] rounded-md bg-indigo-400/20 flex">
          <div
            onClick={() => {
              dispatch(setShowAdjustingAvatarModal(true));
            }}
            className="w-[30%] hover:bg-indigo-200/30 duration-300 cursor-pointer h-full border-r-[1px] border-indigo-50/10 flex justify-center items-center rounded-s-md">
            <button
              style={{
                backgroundSize: "100px",
                backgroundPositionY: "-7px",
                backgroundPositionX: "-102px",
                backgroundImage: `url('/${
                  playerId && players[playerId]?.avatar
                }.png')`,
              }}
              className="h-7 aspect-square w-7 border rounded-full"></button>
          </div>
          <div
            onClick={() => {
              dispatch(setShowEditNameModal(true));
            }}
            className="relative w-[70%] h-full py-1 px-2 hover:bg-indigo-200/30 duration-300 cursor-pointer rounded-e-md">
            <p className="text-white text-xs font-medium capitalize">
              {playerId && players[playerId]?.name}
            </p>
            <p className=" text-xs text-gray-300">Available</p>
            <div className="absolute bottom-0 -right-0 w-3 h-3">
              <span className="absolute inset-0 bg-green-400 rounded-full animate-ping"></span>
              <span className="absolute inset-0 bg-green-400 rounded-full border-[1px] border-gray-900"></span>
            </div>
            <button className="absolute top-1 right-1 text-gray-200">
              <MdModeEditOutline />
            </button>
          </div>
        </div>
        <Recording />
        <Emoji />
      </div>

      <div className="h-full flex items-center gap-3">
        <button
          onClick={() => {
            dispatch(setActionToChatBox());
          }}
          className={classNames(
            "p-2 text-white flex justify-center items-center rounded-md hover:bg-indigo-400/20 duration-200",
            activeAction === "CHAT_BOX" && "bg-indigo-400/50"
          )}>
          <IoChatbubblesSharp size={22} />
        </button>
        <button
          onClick={() => {
            dispatch(setActionToMember());
          }}
          className={classNames(
            "p-2 text-white flex justify-center items-center rounded-md hover:bg-indigo-400/20 duration-200",
            activeAction === "MEMBER" && "bg-indigo-400/50"
          )}>
          <FaUserFriends size={22} />
        </button>
      </div>
    </div>
  );
};

export default Tool;
