import { setShowQuizModal } from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import { Dialog } from "@headlessui/react";
import { upperCase } from "lodash";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function QuizModal(props: any) {
  const { isQuiz, question, answer, isCorrect, isLowerCase, reward }: any =
    props;
  const [text, setText] = useState<any>("");
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.actionSlice.isShowQuizModal
  );
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <Dialog
    
    open={isOpen} onClose={() => {}} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className={reward ?`relative bg-white p-8 shadow-2xl rounded-md` :`relative mx-auto overflow-hidden max-h-[90vh] max-w-[80%] ${reward ? 'w-full' : 'w-[450px]'} bg-[#202540] rounded-2xl text-white px-4 py-8`}>
          <button
            className={`absolute top-3 right-3 ${reward ?'' :'text-white'} `}
            onClick={() => {
              dispatch(setShowQuizModal(false));
            }}
          >
            <IoClose size={25} />
          </button>
          {!reward &&<div
            className={`h-fit text-center text-base lg:text-2xl mb-8 mt-4 ${
              isLowerCase !== true && "uppercase"
            }`}
          >
            {question || ""}
            <br />
            {isLowerCase && "GOOD LUCK!"}
          </div>}
          <div className="flex justify-center items-center mt-2">{reward && <img className="  max-h-[720px]  lg:max-h-[70vh] w-auto object-fill"  src={reward} alt="reward" />}</div>
          {!isQuiz && (
            <div className="w-full px-8 ">
              <input
                className="text-center uppercase w-full self-center text-white bg-transparent border-blue-400 border-2 rounded-md h-10"
                onInput={handleChange}
              />
            </div>
          )}
            {!reward && 
          <div className="w-full flex justify-end mt-8">
            <button
              className="rounded-md bg-gray-500 px-4 py-2 mr-2 hover:opacity-70"
              onClick={() => {
                dispatch(setShowQuizModal(false));
              }}
            >
              Cancel
            </button>
            {!isQuiz && (
              <button
                className="rounded-md mr-8 bg-green-600 px-4 py-2 hover:opacity-70"
                onClick={() => {
                  dispatch(setShowQuizModal(false));
                  isCorrect && isCorrect(upperCase(text) == upperCase(answer));
                }}
              >
                Submit
              </button>
            )}
          </div>}
        </Dialog.Panel>
        {/* <Dialog.Description>
        </Dialog.Description> */}
      </div>
    </Dialog>
  );
}
