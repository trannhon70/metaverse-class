import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { avatarsList } from "@/constant/metaverseClass/avatars";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { setShowAdjustingAvatarModal } from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import { Dialog } from "@headlessui/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const GetStated = ({
  setHasSelected,
}: {
  setHasSelected: (value: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const { currentPlayer, setCurrentPlayer } = useGamePlayContext();
  const [name, setName] = useState("");
  const [avatar, setPlayer] = useState("");
  const isOpen = useSelector(
    (state: RootState) => state.actionSlice.isShowAdjustingAvatarModal
  );

  const onUpdateAvatar = () => {
    if (avatar) {
      setCurrentPlayer((curr) => ({ ...curr, avatar }));
      dispatch(setShowAdjustingAvatarModal(false));
    }
  };

  const handleChangeName = () => {
    if (name) {
      setCurrentPlayer((curr) => ({ ...curr, name }));
      setHasSelected(true);
    }
  };
  useEffect(() => {
    if (currentPlayer.avatar) setPlayer(currentPlayer.avatar);
  }, [currentPlayer]);

  return (
    <div className="fixed top-0 w-screen h-screen bg-[linear-gradient(0deg,_rgb(51,_58,_100)_0%,_rgb(17,_17,_17)_100%)] font-dm-sans">
      <div className="max-w-2xl mx-auto mt-32">
        <p className="text-4xl text-white font-bold tracking-wider text-center">
          Welcome to{" "}
          <span className="uppercase text-indigo-300">Metaverse</span>
        </p>
        <div className="w-full flex items-center mt-20">
          <div
            onClick={() => {
              dispatch(setShowAdjustingAvatarModal(true));
            }}
            className="relative h-40 flex-1 bg-[#333A64] rounded-3xl hover:ring-[3px] duration-100 ring-indigo-100 cursor-pointer"
          >
            <div
              style={{
                backgroundSize: "280px",
                backgroundPositionY: "-10px",
                backgroundPositionX: "-92px",
                backgroundImage: `url('/${avatar}.png')`,
              }}
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-24 h-32`}
            ></div>
          </div>
          <form
            onSubmit={handleChangeName}
            className="py-6 px-8 text-white flex flex-col items-center flex-[2]"
          >
            <h2 className="font-bold text-lg w-full uppercase">
              What is your name?
            </h2>
            <p className="text-sm font-semibold text-indigo-200 mt-1 mb-6">
              Your name shows above your character. You’ll be able to change it
              anytime.
            </p>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-white border-2 font-semibold"
              required
              autoFocus
            />
            <Button
              type="submit"
              className="bg-[#06D6A0] font-semibold hover:bg-[#75cab4] duration-150 mx-auto mt-4 text-[#202540] px-10"
            >
              Finish
            </Button>
          </form>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => dispatch(setShowAdjustingAvatarModal(false))}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="relative mx-auto w-[550px] bg-[#202540] rounded-md overflow-hidden">
            <button
              className="absolute top-3 right-3 text-white"
              onClick={() => {
                dispatch(setShowAdjustingAvatarModal(false));
              }}
            >
              <IoClose size={25} />
            </button>
            <div className="relative h-40 w-full bg-[#333A64]">
              <div
                style={{
                  backgroundSize: "280px",
                  backgroundPositionY: "-10px",
                  backgroundPositionX: "-92px",
                  backgroundImage: `url('/${avatar}.png')`,
                }}
                className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-24 h-32`}
              ></div>
            </div>
            <div className="py-6 px-8 text-white flex flex-col items-center">
              <div className="w-full grid  grid-cols-4 gap-2">
                {avatarsList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setPlayer(item.id);
                    }}
                    className={classNames(
                      "relative h-40 w-full  rounded-md hover:ring-[3px] duration-100 ring-indigo-100",
                      avatar === item.id ? "bg-indigo-400" : "bg-[#333A64]"
                    )}
                  >
                    <div
                      className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-24 h-32`}
                      style={{
                        backgroundSize: "280px",
                        backgroundPositionY: "-10px",
                        backgroundPositionX: "-92px",
                        backgroundImage: `url('/${item.id}.png')`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <Button
                onClick={onUpdateAvatar}
                type="button"
                className="bg-[#06D6A0] hover:bg-[#75cab4] duration-150 mx-auto mt-4 text-[#202540] px-10"
              >
                Finish
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default GetStated;
