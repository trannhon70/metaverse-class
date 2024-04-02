import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AiOutlineDownload } from "react-icons/ai";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { FaStop } from "react-icons/fa";
import RecordRTC from 'recordrtc';

const Recording = () => {
  const [recorder, setRecorder] = useState<any>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState<any>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      const newRecorder = new RecordRTC(stream, { type: 'video' });

      newRecorder.startRecording();
      setRecorder(newRecorder);
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing media devices:', error);
      alert('Cannot access media devices');
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stopRecording(() => {
        const blob = recorder.getBlob();
        const url = URL.createObjectURL(blob);
        setMediaBlobUrl(url);
        setIsRecording(false);
      });
    }
  };

  const downloadRecording = () => {
    if (mediaBlobUrl) {
      const currentTimeStamp = new Date().getTime();
      const pathName = `Screen_Recording_Metaverse_${currentTimeStamp}.webm`;

      const link = document.createElement("a");
      link.href = mediaBlobUrl;
      link.download = pathName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="h-10 w-auto flex gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {!isRecording && (
              <button
                onClick={startRecording}
                className="h-full aspect-square bg-indigo-100/10 rounded-full flex items-center justify-center text-red-400"
              >
                <BsFillRecordCircleFill />
              </button>
            )}
          </TooltipTrigger>
          <TooltipContent className="bg-gray-600 border-none">
            <p className="text-white">Start record</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {isRecording && (
              <button
                onClick={stopRecording}
                className="h-full aspect-square bg-indigo-100/10 rounded-full flex items-center justify-center text-red-400"
              >
                <FaStop />
              </button>
            )}
          </TooltipTrigger>
          <TooltipContent className="bg-gray-600 border-none">
            <p className="text-white">Stop record</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {mediaBlobUrl && (
              <button
                onClick={downloadRecording}
                className="h-full aspect-square bg-indigo-100/10 rounded-full flex items-center justify-center text-red-400"
              >
                <AiOutlineDownload size={25} />
              </button>
            )}
          </TooltipTrigger>
          <TooltipContent className="bg-gray-600 border-none">
            <p className="text-white">Download</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Recording;
