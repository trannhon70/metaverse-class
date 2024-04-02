import logo from "@/assets/logos/lucete-logo.png";
import { useGamePlayContext } from "@/hooks/useGamePlayContext";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { VscDebugRestart } from "react-icons/vsc";

const MainMenu = () => {
  const { respawnAction } = useGamePlayContext();

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
        ${open ? "" : "text-opacity-90"}
        group w-10 h-10 rounded-md bg-white p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1">
            <Popover.Panel className="absolute bottom-full z-10 mb-3 w-[300px] transform">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-[#282D4E] px-4 py-6 w-full">
                  <p className="mb-4 text-white font-semibold tracking-wider text-lg text-center">
                    METAVERSE CLASS
                  </p>
                  <button
                    onClick={respawnAction}
                    className="flex items-center gap-2 w-full py-1.5 text-white rounded-md text-start px-3 hover:bg-[#545C8F] duration-150 font-medium border border-gray-500">
                    <span>
                      <VscDebugRestart />
                    </span>
                    Respawn
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MainMenu;
