import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { setFirebasePlayer } from "@/utils/firebase/player";
import { Popover } from "antd";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useDebouncedCallback } from "use-debounce";
const emojiList = [
  {
    id: "1",
    icon: "👋",
  },
  {
    id: "2",
    icon: "❤️",
  },
  {
    id: "3",
    icon: "🎉",
  },
  {
    id: "4",
    icon: "👍",
  },
  {
    id: "5",
    icon: "🤣",
  },
  {
    id: "6",
    icon: "👏",
  },
  {
    id: "7",
    icon: "💯",
  },
  {
    id: "8",
    icon: "🤚",
  },
];

const Emoji = () => {
  const { currentPlayer, players } = useGamePlayContext();

  const handleOnClickEmoji = (emoji: string) => {
    setFirebasePlayer(currentPlayer.id, {
      ...players[currentPlayer.id],
      emoji,
    });
    debounced();
  };
  const debounced = useDebouncedCallback(
    () =>
      setFirebasePlayer(currentPlayer.id, {
        ...players[currentPlayer.id],
        emoji: "",
      }),
    // delay in ms
    3000
  );

  const content = (
    <div className="flex">
      {emojiList.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-col items-center hover:bg-slate-100 duration-200 rounded-md p-1">
          <button
            onClick={() => {
              handleOnClickEmoji(item.icon);
            }}
            className="text-[20px] w-8 h-8 flex justify-center items-center border border-[#202540]/40 rounded-full">
            {item.icon}
          </button>
          <span className="text-sm font-medium text-gray-700">{index + 1}</span>
        </div>
      ))}
    </div>
  );
  return (
    <Popover content={content}>
      <button
        type="button"
        className="h-10 w-10 flex justify-center items-center bg-indigo-100/10 rounded-full">
        <BsEmojiSmileFill color="white" size={20} />
      </button>
    </Popover>
  );
};

export default Emoji;
