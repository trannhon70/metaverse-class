import bg from "@/assets/backgrounds/menuPage-bg.jpg";
import btnBg from "@/assets/images/img1.png";
import item1 from "@/assets/images/menu-item-1.png";
import item2 from "@/assets/images/menu-item-2.png";
import item3 from "@/assets/images/menu-item-3.png";
import { moveElement } from "@/utils/localStorage";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    id: "1",
    title: "Warm Up",
    image: item3,
    href: "/warm-up",
  },
  {
    id: "2",
    title: "AI Tutor",
    image: item1,
    href: "/ai-tutor",
  },
  {
    id: "3",
    title: "Metaverse Class",
    image: item2,
    href: "/play",
  },
];

const MenuPage = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(menuItems);
  const [direction, setDirection] = useState<"LEFT" | "RIGHT">("RIGHT");
  return (
    <div className="w-full font-itim no-scrollbar">
      <img
        src={bg}
        alt="bg"
        className="-z-10 fixed top-0 left-0 w-screen h-screen object-cover object-top"
      />
      <div className="max-w-[1000px] mx-auto overflow-hidden px-10">
        <div className="relative w-fit mx-auto mt-12">
          <img src={btnBg} alt="btn-bg" className="w-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-3">
            <h1 className="text-[#ED8087] text-[40px]">GLOBAL DEBATE CAMPUS</h1>
            <p className="text-[#8B8CA6] text-[40px]">-DEMO-</p>
          </div>
        </div>
        <div className="relative w-full flex justify-between mx-auto mt-10 translate-x-6">
          {menu.map((item, index) => (
            <div
              key={item.id + index}
              className={clsx("cursor-pointer ", {
                "animate-fade-in":
                  (index === 0 && direction === "LEFT") ||
                  (index === 2 && direction === "RIGHT"),
                "animate-move-left": index === 1 && direction === "LEFT",
                "animate-move-left-1": index === 2 && direction === "LEFT",
                "animate-move-right": index === 1 && direction === "RIGHT",
                "animate-move-right-1": index === 0 && direction === "RIGHT",
              })}
              onClick={() => {
                if (index === 1) {
                  navigate(item.href);
                }
                if (index === 0) {
                  const newArray = moveElement(menuItems, menu.length - 1);
                  setMenu([...newArray]);
                  setDirection("LEFT");
                }
                if (index === menu.length - 1) {
                  const newArray = moveElement(menuItems, 0);
                  setMenu([...newArray]);
                  setDirection("RIGHT");
                }
              }}>
              <img
                src={item.image}
                alt={item.title}
                className={clsx(" object-cover", {
                  "h-[200px] opacity-70": index !== 1,
                  "h-[400px]": index === 1,
                  "mt-28": index === 1,
                })}
              />
              <p
                className={clsx(
                  "text-center text-3xl text-[#8B8CA6] -mt-2 -translate-x-3",
                  {
                    "text-[50px] -mt-6 mb-10": index === 1,
                  }
                )}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
