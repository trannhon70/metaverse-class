import { setShowQuestionModal } from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import { Dialog } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function QuestionModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.actionSlice.isShowQuestionModal
  );

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(setShowQuestionModal(false))}
      className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="relative mx-auto w-[450px] bg-[#202540] rounded-md text-white">
          <button
            className="absolute top-3 right-3 text-white"
            onClick={() => {
              dispatch(setShowQuestionModal(false));
            }}>
            <IoClose size={25} />
          </button>
          <div className="min-h-[200px] p-4">Welcome to metaverse</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
