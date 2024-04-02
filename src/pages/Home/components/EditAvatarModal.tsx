import { Button } from "@/components/ui/button";
import { avatarsList } from "@/constant/metaverseClass/avatars";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { db } from "@/lib/firebase";
import { setShowAdjustingAvatarModal } from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import { Dialog } from "@headlessui/react";
import classNames from "classnames";
import { ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function EditAvatarModal() {
  const dispatch = useDispatch();
  const { currentPlayer, setCurrentPlayer, playerId, players } =
    useGamePlayContext();
  const [currentAvatar, setCurrentAvatar] = useState<string>("");
  const isOpen = useSelector(
    (state: RootState) => state.actionSlice.isShowAdjustingAvatarModal
  );

  const onUpdateAvatar = () => {
    if (!playerId) return;
    const refPlayerFirebase = ref(db, `players/${currentPlayer.id}`);
    const updatedPlayer = {
      ...players[playerId],
      avatar: currentAvatar,
    };
    set(refPlayerFirebase, updatedPlayer);
    setCurrentPlayer(updatedPlayer);
    dispatch(setShowAdjustingAvatarModal(false));
  };

  useEffect(() => {
    if (currentPlayer.avatar) setCurrentAvatar(currentPlayer.avatar);
  }, [currentPlayer.avatar, isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(setShowAdjustingAvatarModal(false))}
      className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="relative mx-auto w-[450px] bg-[#202540] rounded-md overflow-hidden">
          <button
            className="absolute top-3 right-3 text-white"
            onClick={() => {
              dispatch(setShowAdjustingAvatarModal(false));
            }}>
            <IoClose size={25} />
          </button>
          <div className="relative h-40 w-full bg-[#333A64]">
            <div
              style={{
                backgroundSize: "280px",
                backgroundPositionY: "-10px",
                backgroundPositionX: "-92px",
                backgroundImage: `url('/${currentAvatar}.png')`,
              }}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-24 h-32`}></div>
          </div>
          <div className="py-6 px-8 text-white flex flex-col items-center">
            <div className="w-full grid  grid-cols-4 gap-2">
              {avatarsList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setCurrentAvatar(item.id);
                  }}
                  className={classNames(
                    "relative h-40 w-full  rounded-md hover:ring-[3px] duration-100 ring-indigo-100",
                    currentAvatar === item.id ? "bg-indigo-400" : "bg-[#333A64]"
                  )}>
                  <div
                    className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-24 h-32`}
                    style={{
                      backgroundSize: "280px",
                      backgroundPositionY: "-10px",
                      backgroundPositionX: "-92px",
                      backgroundImage: `url('/${item.id}.png')`,
                    }}></div>
                </div>
              ))}
            </div>
            <Button
              onClick={onUpdateAvatar}
              type="button"
              className="bg-[#06D6A0] hover:bg-[#75cab4] duration-150 mx-auto mt-4 text-[#202540] px-10">
              Finish
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
