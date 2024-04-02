import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { clearActiveAction } from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import { PlayerType } from "@/types/player";
import classNames from "classnames";
import { useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const MemberBox = () => {
  const { players, currentRoom } = useGamePlayContext();
  const playersArr = useMemo<PlayerType[]>(() => {
    return Object.entries(players).map((item) => item[1]) as PlayerType[];
  }, [players]);
  const dispatch = useDispatch();
  const activeAction = useSelector(
    (state: RootState) => state.actionSlice.activeAction
  );

  return (
    <div
      className={classNames(
        "lg:relative h-[calc(100vh-3.7rem)] z-30 duration-500 bg-[#28324E] border-l-[1px] border-indigo-200/20 flex flex-col fixed top-0 right-0",
        activeAction === "MEMBER"
          ? "visible opacity-100 translate-x-0 w-72"
          : "invisible opacity-0 translate-x-full !w-0"
      )}>
      <div className="relative border-b-[1px] border-indigo-200/20 h-14 flex items-center px-4 text-white font-medium text-lg">
        <span className="uppercase">{currentRoom.id}</span>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-3 text-white"
          onClick={() => {
            dispatch(clearActiveAction());
          }}>
          <IoClose size={25} />
        </button>
      </div>
      <div className="w-full h-[calc(100%-3.5rem)] px-6 flex flex-col flex-grow">
        <div className="flex-grow overflow-y-auto py-4 flex flex-col gap-5">
          {playersArr.map((item) => (
            <Player
              key={item.id}
              direction={item.direction}
              avatar={item.avatar}
              name={item.name}
              id={item.id}
              x={item.x}
              y={item.y}
              roomId={item.roomId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Player: React.FC<PlayerType> = ({ name, avatar }) => {
  return (
    <div className="flex gap-3 items-center">
      <div
        style={{
          backgroundSize: "100px",
          backgroundPositionY: "-7px",
          backgroundPositionX: "-102px",
          backgroundImage: `url('/${avatar}.png')`,
        }}
        className="min-w-[2rem] h-8  rounded-full relative border border-white">
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-600 rounded-full animate-ping"></span>
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-600 rounded-full border-[1px]"></span>
      </div>
      <p className="w-full flex-grow font-semibold text-gray-50">{name}</p>
    </div>
  );
};

export default MemberBox;
