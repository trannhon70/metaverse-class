const AITutor = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-0 w-screen h-[calc(100vh-6rem)] z-40 overflow-hidden">
      <iframe
        className="absolute top-1/2 -translate-y-1/2 left-0 w-screen h-screen"
        src="https://global-debate.streamlit.app?embedded=true"
      />
    </div>
  );
};

export default AITutor;
