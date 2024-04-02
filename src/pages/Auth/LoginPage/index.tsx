import { motion } from "framer-motion";
import { useState } from "react";
import LuceteLogin from "./LuceteLogin";
import NormalLogin from "./NormalLogin";

export type LoginPageType = {
  changeMode: () => void;
};

const LoginPage = () => {
  const [loginMode, setLoginMode] = useState<"NORMAL" | "LUCETE">("NORMAL");
  const changeToLeceteMode = () => {
    setLoginMode("LUCETE");
  };
  const changeToNormalMode = () => {
    setLoginMode("NORMAL");
  };

  return (
    <>
      {loginMode === "NORMAL" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <NormalLogin changeMode={changeToLeceteMode} />
        </motion.div>
      )}
      {loginMode === "LUCETE" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <LuceteLogin changeMode={changeToNormalMode} />
        </motion.div>
      )}
    </>
  );
};

export default LoginPage;
