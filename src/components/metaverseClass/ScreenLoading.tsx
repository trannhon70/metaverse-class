import { RotatingTriangles } from "react-loader-spinner";

const ScreenLoading = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-[#202540] flex justify-center items-center z-40">
      <div className="flex flex-col items-center">
        <RotatingTriangles
          visible={true}
          height="100"
          width="100"
          colors={["#EEEEEE", "#EEEEEE", "#EEEEEE"]}
          ariaLabel="rotating-triangels-loading"
          wrapperClass="rotating-triangels-wrapper"
        />
        <span className="text-white font-medium">Loading...</span>
      </div>
    </div>
  );
};

export default ScreenLoading;
