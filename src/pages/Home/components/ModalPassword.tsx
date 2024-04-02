import {
  setError,
  setPassword,
  setShowModalPassword,
} from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import {  useState } from "react";
import "./ModalPassword.css";
import { useDispatch, useSelector } from "react-redux";
// import { Modal } from "antd";
import { Dialog } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
const ModalPassword = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const isOpen = useSelector(
    (state: RootState) => state.actionSlice.isShowModalPassword
  );
  const error = useSelector((state: RootState) => state.actionSlice.error);

  const handleChange = (e: any) => {
    setText(e.target.value);
    dispatch(setError(false));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(setPassword(text));
    }
  };
  const handleClick = () => {
    dispatch(setPassword(text));
  };



  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      // className=" z-50"
      style={{ zIndex: 100000 }}
    >
      <div className="fixed inset-0 flex  items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-[#202540] p-4">
          <Dialog.Title className="relative rounded-md text-white text-lg">
            Password:
            <button
              className={`absolute top-0 right-0 text-white`}
              onClick={() => {
                dispatch(setShowModalPassword(false));
                dispatch(setError(false));
              }}
            >
              <IoClose size={25} />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <input
              ref={(input) => input && input.focus()}
              type="password"
              className=" text-white border-blue-400 border-2 rounded-md h-10 mt-4 p-2 w-full bg-transparent text-center"
              onInput={handleChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </Dialog.Description>

          {error && <div className="text-red-500 mt-2">Incorrect password</div>}
          <div className="w-full flex justify-end mt-4">
            <button
              className="rounded-md bg-gray-500 px-4 py-2 mr-2 hover:opacity-70 text-white"
              onClick={() => {
                dispatch(setShowModalPassword(false));
                dispatch(setError(false));
              }}
            >
              Cancel
            </button>
            <button
              className="rounded-md  bg-green-600 px-4 py-2 hover:opacity-70  text-white"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
    // <Modal
    //   title="Password : "
    //   centered
    //   open={isOpen}
    //   footer={false}
    //   // onOk={() => setOpen(false)}
    //   onCancel={() => dispatch(setShowModalPassword(false))}
    //   width={300}
    // >
    //   <div className="w-full  ">
    //     <input
    //       type="password"
    //       className="text-center uppercase w-full self-center text-black bg-transparent border-blue-400 border-2 rounded-md h-10"
    //       onInput={handleChange}
    //       onKeyDown={handleKeyDown}
    //     />
    //   </div>
    //   {error && <div className="text-red-500 mt-2">Incorrect password</div>}
    //   <div className="w-full flex justify-end mt-8">
    //     <button
    //       className="rounded-md bg-gray-500 px-4 py-2 mr-2 hover:opacity-70 text-white"
    //       onClick={() => {
    //         dispatch(setShowModalPassword(false));
    //       }}
    //     >
    //       Cancel
    //     </button>
    //     <button
    //       className="rounded-md mr-8 bg-green-600 px-4 py-2 hover:opacity-70  text-white"
    //       onClick={handleClick}
    //     >
    //       Submit
    //     </button>
    //   </div>
    // </Modal>
  );
};

export default ModalPassword;
