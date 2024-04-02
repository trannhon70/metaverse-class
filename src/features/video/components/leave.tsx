import { Button } from "antd";
interface LeaveButtonProps {
  onLeaveClick: () => void;
  onEndClick: () => void;
  isHost: boolean;
}

const LeaveButton = (props: LeaveButtonProps) => {
  const { onLeaveClick, onEndClick, isHost } = props;

  return isHost ? (
    <>
      <Button
        size="large"
        className="!bg-red-500 !font-bold !text-white"
        onClick={onLeaveClick}>
        Leave
      </Button>
      <Button
        size="large"
        className="!bg-red-600 !font-bold !text-white ml-4"
        onClick={onEndClick}>
        End class
      </Button>
    </>
  ) : (
    // <Dropdown
    //   className="!text-white"
    //   menu={getAntdDropdownMenu([getAntdItem("End class", "end")], onEndClick)}
    //   placement="topRight">
    //   <Button
    //     size="large"
    //     className="!bg-red-500 !font-bold !text-white"
    //     onClick={onLeaveClick}>
    //     Leave
    //   </Button>
    // </Dropdown>
    <Button
      className="!bg-red-500 !rounded-md !px-4 !font-bold"
      ghost={true}
      shape="circle"
      size="large"
      onClick={onLeaveClick}
      title="Leave session">
      End
    </Button>
  );
};

export { LeaveButton };
