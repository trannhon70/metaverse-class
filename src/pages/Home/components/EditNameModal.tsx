import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { db } from "@/lib/firebase";
import { setShowEditNameModal } from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import { Dialog } from "@headlessui/react";
import { ref, set } from "firebase/database";
import { SyntheticEvent, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function EditNameModal() {
  const dispatch = useDispatch();
  const { currentPlayer, setCurrentPlayer, playerId, players } =
    useGamePlayContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isOpen = useSelector(
    (state: RootState) => state.actionSlice.isShowEditNameModal
  );

  const handleChangeName = (
    e: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current?.value) {
      if (!playerId) return;
      const refPlayerFirebase = ref(db, `players/${currentPlayer.id}`);
      const updatedPlayer = {
        ...players[playerId],
        name: inputRef.current?.value,
      };
      set(refPlayerFirebase, updatedPlayer);
      inputRef.current.value = "";
      setCurrentPlayer(updatedPlayer);
      dispatch(setShowEditNameModal(false));
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(setShowEditNameModal(false))}
      className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="relative mx-auto w-[450px] bg-[#202540] rounded-md overflow-hidden">
          <button
            className="absolute top-3 right-3 text-white"
            onClick={() => {
              dispatch(setShowEditNameModal(false));
            }}>
            <IoClose size={25} />
          </button>
          <div className="relative h-40 w-full bg-[#333A64]">
            <div
              className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-24 h-32`}
              style={{
                backgroundSize: "280px",
                backgroundPositionY: "-10px",
                backgroundPositionX: "-92px",
                backgroundImage: `url('${
                  playerId && players[playerId]?.avatar
                }.png')`,
              }}></div>
          </div>
          <form
            onSubmit={handleChangeName}
            className="py-6 px-8 text-white flex flex-col items-center">
            <h2 className="font-semibold text-lg w-full">What is your name?</h2>
            <p className="text-sm text-indigo-200 mt-3 mb-6">
              Your name shows above your character. You’ll be able to change it
              anytime.
            </p>
            <Input
              defaultValue={currentPlayer.name}
              ref={inputRef}
              className="text-white"
            />
            <Button
              type="submit"
              className="bg-[#06D6A0] hover:bg-[#75cab4] duration-150 mx-auto mt-4 text-[#202540] px-10">
              Finish
            </Button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
