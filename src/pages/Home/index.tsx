import GameContainer from "@/components/metaverseClass/GameContainer";
import MeetingRoom from "@/components/metaverseClass/MeetingRoom";
import { useState } from "react";
import GetStated from "../GetStated";
import Layout from "./Layout";

const Home = () => {
  const [hasSelected, setHasSelected] = useState(false);
  if (!hasSelected) return <GetStated setHasSelected={setHasSelected} />;

  return (
    <Layout>
      <MeetingRoom />
      <GameContainer />
    </Layout>
  );
};

export default Home;
