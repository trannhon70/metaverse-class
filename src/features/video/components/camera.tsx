/* eslint-disable */

import ZoomMediaContext from "@/contexts/media-context";
import {
  CheckOutlined,
  UpOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Tooltip } from "antd";
import classNames from "classnames";
import { useContext } from "react";
import { MediaDevice } from "../video-types";
import {
  MenuItem,
  getAntdDropdownMenu,
  getAntdItem,
} from "./video-footer-utils";
interface CameraButtonProps {
  isStartedVideo: boolean;
  isMirrored?: boolean;
  isBlur?: boolean;
  onCameraClick: () => void;
  onSwitchCamera: (deviceId: string) => void;
  onMirrorVideo?: () => void;
  onVideoStatistic?: () => void;
  onBlurBackground?: () => void;
  onSelectVideoPlayback?: (url: string) => void;
  className?: string;
  cameraList?: MediaDevice[];
  activeCamera?: string;
  activePlaybackUrl?: string;
}
const videoPlaybacks = [
  {
    title: "Video 1",
    url: "https://source.zoom.us/brand/mp4/Using%20the%20Zoom%20PWA.mp4",
  },
  {
    title: "Video 2",
    url: "https://source.zoom.us/brand/mp4/Zoom%20Cares%20Nonprofit%20Impact.mp4",
  },
  {
    title: "Video 3",
    url: "https://source.zoom.us/brand/mp4/Zoom%20One%20-%20Team%20Chat%2C%20Phone%2C%20Email%2C%20and%20more.mp4",
  },
];
const CameraButton = (props: CameraButtonProps) => {
  const {
    isStartedVideo,
    className,
    cameraList,
    activeCamera,
    isMirrored,
    isBlur,
    activePlaybackUrl,
    onCameraClick,
    onSwitchCamera,
    onMirrorVideo,
    onVideoStatistic,
    onBlurBackground,
    onSelectVideoPlayback,
  } = props;
  const { mediaStream } = useContext(ZoomMediaContext);
  const onMenuItemClick = (payload: { key: any }) => {
    if (payload.key === "mirror") {
      onMirrorVideo?.();
    } else if (payload.key === "statistic") {
      onVideoStatistic?.();
    } else if (payload.key === "blur") {
      onBlurBackground?.();
    } else if (/^https:\/\//.test(payload.key)) {
      onSelectVideoPlayback?.(payload.key);
    } else {
      onSwitchCamera(payload.key);
    }
  };

  console.log(cameraList, "cameraList");

  const menuItems =
    cameraList &&
    cameraList.length > 0 &&
    ([
      getAntdItem(
        "Select a Camera",
        "camera",
        undefined,
        cameraList.map((item) =>
          getAntdItem(
            item.label,
            item.deviceId,
            item.deviceId === activeCamera && <CheckOutlined />
          )
        ),
        "group"
      ),
      getAntdItem(
        "Select a Video Playback",
        "playback",
        undefined,
        videoPlaybacks.map((item) =>
          getAntdItem(
            item.title,
            item.url,
            item.url === activePlaybackUrl && <CheckOutlined />
          )
        ),
        "group"
      ),
      getAntdItem("", "d1", undefined, undefined, "divider"),
      getAntdItem("Mirror My Video", "mirror", isMirrored && <CheckOutlined />),
      mediaStream?.isSupportVirtualBackground()
        ? getAntdItem("Blur My Background", "blur", isBlur && <CheckOutlined />)
        : getAntdItem("Mask My Background", "blur"),
      getAntdItem("", "d2", undefined, undefined, "divider"),
      getAntdItem("Video Statistic", "statistic"),
    ].filter(Boolean) as MenuItem[]);
  return (
    <div className={classNames("camera-footer", className)}>
      {isStartedVideo && menuItems ? (
        <Dropdown.Button
          className="vc-dropdown-button"
          size="large"
          menu={getAntdDropdownMenu(menuItems, onMenuItemClick)}
          onClick={onCameraClick}
          trigger={["click"]}
          icon={<UpOutlined />}
          placement="topRight"
        >
          <VideoCameraOutlined />
        </Dropdown.Button>
      ) : (
        <Tooltip title={`${isStartedVideo ? "stop camera" : "start camera"}`}>
          <Button
            className={classNames("vc-button", className)}
            icon={
              isStartedVideo ? (
                <VideoCameraOutlined style={{ fontSize: "25px" }} />
              ) : (
                <VideoCameraAddOutlined style={{ fontSize: "25px" }} />
              )
            }
            ghost={true}
            shape="circle"
            size="large"
            onClick={onCameraClick}
          />
        </Tooltip>
      )}
    </div>
  );
};
export default CameraButton;
