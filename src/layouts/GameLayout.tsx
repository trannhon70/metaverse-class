import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const stepsList = [
  {
    title: "WARM UP",
    href: "/warm-up",
  },
  {
    title: "AI TUTOR",
    href: "/ai-tutor",
  },
  {
    title: "METAVERSE CLASS",
    href: "/play",
  },
];

const GameLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authSlice
  ).isAuthenticated;
  const [currentState, setCurrentState] = useState(
    stepsList.findIndex((item) => item.href === location.pathname)
  );

  useEffect(() => {
    if (stepsList[currentState].href !== location.pathname)
      navigate(stepsList[currentState].href);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState, navigate]);

  const handleNext = () => {
    const newIndex = currentState + 1;
    if (newIndex <= stepsList.length - 1) {
      setCurrentState(newIndex);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentState - 1;
    if (newIndex >= 0) {
      setCurrentState(newIndex);
    }
  };

  return (
    <>
      {isAuthenticated && (
        <div className="fixed top-10 left-0 z-50 w-full font-itim">
          {currentState > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-10 text-[33px] text-[#8B8CA6] bg-gray-200 rounded-full px-6 hover:bg-sky-200 duration-200">
              Back
            </button>
          )}

          {currentState < stepsList.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-10 text-[33px] text-[#8B8CA6] bg-gray-200 rounded-full px-6 hover:bg-sky-200 duration-200">
              Next
            </button>
          )}
        </div>
      )}

      <Outlet />
    </>
  );
};

export default GameLayout;
