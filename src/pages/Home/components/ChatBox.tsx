import { Input } from "@/components/ui/input";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { db } from "@/lib/firebase";
import { clearActiveAction } from "@/redux/slices/actionSlice";
import { RootState } from "@/redux/store";
import { MessageType } from "@/types/message";
import classNames from "classnames";
import { push, ref, set } from "firebase/database";
import { SyntheticEvent, useMemo, useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const ChatBox = () => {
  const { currentRoom, messages, currentPlayer } = useGamePlayContext();
  const messagesArr = useMemo<MessageType[]>(() => {
    return Object.entries(messages).map(([key, value]) => ({
      id: key,
      ...value,
    }));
  }, [messages]);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const activeAction = useSelector(
    (state: RootState) => state.actionSlice.activeAction
  );

  const boxChatRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value) {
      const messageListRef = ref(db, `messages/${currentRoom.id}`);
      const newMessageRef = push(messageListRef);
      const currentDate = new Date();
      set(newMessageRef, {
        message: inputRef.current.value,
        created_date: currentDate.toString(),
        sent_by: {
          name: currentPlayer.name,
          id: currentPlayer.id,
          avatar: currentPlayer.avatar,
        },
      });
      inputRef.current.value = "";
      setTimeout(() => {
        if (boxChatRef.current)
          boxChatRef.current.scrollTop = boxChatRef.current.scrollHeight;
      });
    }
  };

  return (
    <div
      className={classNames(
        "lg:relative h-[calc(100vh-3.7rem)] duration-500 bg-[#28324E] border-l-[1px] border-indigo-200/20 flex flex-col fixed z-30 top-0 right-0",
        activeAction === "CHAT_BOX"
          ? "visible opacity-100 translate-x-0 w-80"
          : "invisible opacity-0 translate-x-full !w-0"
      )}>
      <div className="relative border-b-[1px] border-indigo-200/20 h-14 flex items-center px-4 text-white font-medium text-lg">
        <span>Chat</span>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-3 text-white"
          onClick={() => {
            dispatch(clearActiveAction());
          }}>
          <IoClose size={25} />
        </button>
      </div>
      <div className="w-full h-[calc(100%-3.5rem)] px-6 flex flex-col">
        <div
          className="flex-grow overflow-y-auto py-4 flex flex-col"
          ref={boxChatRef}>
          {messagesArr?.map((item, index) => {
            if (
              index > 0 &&
              messagesArr[index].sent_by.id ===
                messagesArr[index - 1].sent_by.id
            ) {
              return (
                <MessageSameSender
                  key={item.id}
                  message={item.message}
                  created_date={item.created_date}
                  sent_by={item.sent_by}
                />
              );
            }
            return (
              <Message
                key={item.id}
                message={item.message}
                created_date={item.created_date}
                sent_by={item.sent_by}
              />
            );
          })}
        </div>
        <form
          className="relative min-h-[5rem] flex items-center"
          onSubmit={handleSubmit}>
          <Input ref={inputRef} className="text-white pr-10" />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-2 text-white">
            <BiSolidSend size={25} />
          </button>
        </form>
      </div>
    </div>
  );
};

const Message: React.FC<MessageType> = ({ message, created_date, sent_by }) => {
  return (
    <div className="flex gap-3 mt-3">
      <div
        style={{
          backgroundSize: "100px",
          backgroundPositionY: "-10px",
          backgroundPositionX: "-105px",
          backgroundImage: `url('/${sent_by.avatar}.png')`,
        }}
        className="min-w-[1.5rem] h-6 border border-white rounded-full"></div>
      <div className="w-full flex-grow">
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-gray-400">{sent_by.name}</p>
          <p className="text-xs text-gray-500 font-medium">
            {new Date(created_date).toLocaleString()}
          </p>
        </div>
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
};

const MessageSameSender: React.FC<MessageType> = ({ message }) => {
  return (
    <div className="flex gap-3">
      <div className="min-w-[1.5rem] h-6"></div>
      <div className="w-full">
        <p className="text-white whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};

export default ChatBox;
