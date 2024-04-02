import { isHttpsLink } from "@/utils";
import { Fragment, SyntheticEvent, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { messageChatType } from "./video-footer";

type GroupChatType = {
  closeChat: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chatClient: any;
  messagesList: messageChatType[];
};

const GroupChat: React.FC<GroupChatType> = ({
  closeChat,
  chatClient,
  messagesList,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const boxChatRef = useRef<HTMLDivElement | null>(null);
  const onSendMessage = async (e: SyntheticEvent) => {
    e.preventDefault();
    const message = inputRef.current?.value;
    if (message === "") return;
    // alert(inputRef.current?.value);
    await chatClient?.sendToAll(message);
    if (inputRef.current) inputRef.current.value = "";
    inputRef.current?.focus();
    setTimeout(() => {
      if (boxChatRef.current)
        boxChatRef.current.scrollTop = boxChatRef.current.scrollHeight;
    });
  };

  return (
    <div className="fixed h-[calc(100vh-6rem)] z-40 w-[350px] bg-white top-2 right-2 rounded-lg p-4 flex flex-col">
      {/* close chat */}
      <button
        className="absolute top-4 right-4 text-gray-900"
        onClick={closeChat}
      >
        <IoMdClose size={22} />
      </button>
      <p className="w-full p-3 bg-gray-100 text-center text-sm text-gray-600 rounded-lg mt-8 mb-4">
        Messages can only be seen by people in the call and are deleted when the
        call ends
      </p>
      {/* content chat */}
      <div ref={boxChatRef} className="flex-1 overflow-y-auto">
        {messagesList?.map((item, index) => (
          <Fragment key={item.id}>
            {index > 0 &&
            messagesList[index].userId === messagesList[index - 1].userId ? (
              <ExtraMessage key={item?.id} message={item.message} />
            ) : (
              <Message
                key={item?.id}
                author={item.author}
                message={item.message}
                timestamp={item.timestamp}
              />
            )}
          </Fragment>
        ))}
      </div>
      {/* chat box */}
      <form onSubmit={onSendMessage} className="w-full relative mt-4">
        <input
          ref={inputRef}
          type="text"
          className="w-full rounded-full bg-gray-200 py-3 px-5 pr-12 focus:border-none focus:outline-none text-sm text-gray-700"
          placeholder="Send a message"
        />

        <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-4 text-blue-500"
        >
          <AiOutlineSend size={22} />
        </button>
      </form>
    </div>
  );
};

type MessageType = {
  author: string;
  timestamp: string;
  message: string;
};
const Message: React.FC<MessageType> = ({ author, timestamp, message }) => {
  const isValidLink = isHttpsLink(message);
  return (
    <div className="flex flex-col mt-6 first:mt-0">
      <div className="">
        <span className="font-medium mr-3">{author}</span>
        <span className="text-sm text-gray-400">{timestamp}</span>
      </div>
      {isValidLink ? (
        <a href={message} target="_blank" className="underline text-blue-600">
          {message}
        </a>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

type ExtraMessage = Pick<MessageType, "message">;

const ExtraMessage: React.FC<ExtraMessage> = ({ message }) => {
  const isValidLink = isHttpsLink(message);
  return (
    <div className="mt-3">
      {isValidLink ? (
        <a href={message} target="_blank" className="underline text-blue-600">
          {message}
        </a>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default GroupChat;
