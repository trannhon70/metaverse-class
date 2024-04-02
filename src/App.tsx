import { Route, Routes } from "react-router-dom";
import { GamePlayProvider } from "./contexts/GamePlayContext";
import GameLayout from "./layouts/GameLayout";
import ProtectRoute from "./layouts/ProtectRoute";
import AITutor from "./pages/AITutor";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import Home from "./pages/Home";
import MenuPage from "./pages/Homepage/MenuPage";
import WarmUp from "./pages/WarmUp";

function App() {
  return (
    <GamePlayProvider>
      <Routes>
        <Route path="/" element={<ProtectRoute />}>
          <Route path="" element={<MenuPage />} />
        </Route>

        <Route path="/" element={<GameLayout />}>
          <Route path="play" element={<Home />} />
          <Route path="warm-up" element={<WarmUp />} />
          <Route path="ai-tutor" element={<AITutor />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </GamePlayProvider>
  );
}

export default App;
