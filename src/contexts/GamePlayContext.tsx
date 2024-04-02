/* eslint-disable @typescript-eslint/no-explicit-any */
import { CONFIG_MAP } from "@/constant/metaverseClass/config";
import { auth, db } from "@/lib/firebase";
import {
  setError,
  setLoadingGame,
  setPasswordOld,
  setShowModalPassword,
  setShowQuestionModal,
  setShowQuizModal,
} from "@/redux/slices/actionSlice";
import { setLoading } from "@/redux/slices/mapSlice";
import { setRoomId } from "@/redux/slices/meetingRoomSlice";
import { RootState } from "@/redux/store";
import { MapType } from "@/types/map";
import { MessageType } from "@/types/message";
import { GamePlayContextProps, PlayerType, Position } from "@/types/player";
import { simulateFetching } from "@/utils";
import { Point, astar } from "@/utils/automove";
import { isInputDateMoreThanSpecifiedMinutesPastCurrentDate } from "@/utils/date";
import { KeyPressListener } from "@/utils/event";
import { isPerformAction, isSolid } from "@/utils/gameplay";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import {
  child,
  get,
  onDisconnect,
  onValue,
  ref,
  remove,
  set,
} from "firebase/database";
import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

export const GamePlayContext = createContext<GamePlayContextProps | undefined>(
  undefined
);

export const GamePlayProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams] = useSearchParams();
  const roomIdFromParams = searchParams.get("roomId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoadingGame = useSelector(
    (state: RootState) => state.actionSlice.isLoadingGame
  );
  const password = useSelector(
    (state: RootState) => state.actionSlice.password
  );
  const passwordOld = useSelector(
    (state: RootState) => state.actionSlice.passwordOld
  );
  const playerIdRef = useRef<string | null>(null);
  const playerRef = useRef<any>(null);
  const listPlayersRef = useRef<any>(null);
  const [currentRoom, setCurrentRoom] = useState<MapType>(CONFIG_MAP["school"]);
  const [currentPlayer, setCurrentPlayer] = useState<PlayerType>(
    {} as PlayerType
  );
  const clickPositionMap = useRef<Position>({ x: null, y: null });
  const [players, setPlayers] = useState<Record<string, any>>({});
  const [messages, setMessages] = useState<Record<string, MessageType>>({});
  const currentValueQA = useRef<any>(null);
  const currentValueQuiz = useRef<any>(null);
  let time: NodeJS.Timeout | null = null;
  const listenerPressKeyX = (event: any) => {
    // Check if the pressed key is the "X" key (key code 88 or key identifier "KeyX")
    if (event.keyCode === 88 || event.key === "x" || event.key === "X") {
      dispatch(setShowQuestionModal(true));
    }
  };
  useEffect(() => {
    dispatch(setRoomId(currentRoom.id));
    let mapt = currentRoom.map;
    Object?.keys(currentRoom?.actions as any)?.map((value: any) => {
      currentRoom?.actions?.[value]?.type == "POP_UP_QUIZ"
        ? (mapt[parseInt(value?.slice(3)) || 0][
            parseInt(value?.slice(0, 2)) || 0
          ] = 1)
        : "";
    });
    setCurrentRoom((prev: any) => ({ ...prev, map: mapt }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoom.map, currentRoom.id]);
  // useEffect(()=>{
  //   const startRoom = CONFIG_MAP["school"];

  //   if(location.pathname == '/play') {
  //     navigate(`/play?roomId=${startRoom.id}`);
  //   }
  // },[location.pathname])


  const respawnAction = () => {
    const startRoom = CONFIG_MAP["school"];
    dispatch(setLoading(true));
    new Promise<void>((resolve) => {
      setTimeout(() => {
        handleSetPositionPlayerCurrent(
          startRoom.startPosition.x,
          startRoom.startPosition.y
        );
        if (playerIdRef.current) {
          listPlayersRef.current[playerIdRef.current].roomId = startRoom.id;
          set(playerRef.current, listPlayersRef.current[playerIdRef.current]);
        }
        navigate(`/play?roomId=${startRoom.id}`);
        setCurrentRoom(startRoom);
        setCurrentPlayer((curr) => ({
          ...curr,
          roomId: startRoom.id,
          x: startRoom.startPosition.x,
          y: startRoom.startPosition.y,
        }));
        resolve();
      }, 200);
    }).then(() => {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 200);
    });
  };
  async function handleActionPlayer(type: string, value: any) {
    switch (type) {
      case "CHANGE_ROOM": {
        dispatch(setLoading(true));
        new Promise<void>((resolve) => {
          setTimeout(() => {
            handleSetPositionPlayerCurrent(
              value.resetPosition.x,
              value.resetPosition.y
            );
            if (playerIdRef.current) {
              listPlayersRef.current[playerIdRef.current].roomId = value?.name;
              set(
                playerRef.current,
                listPlayersRef.current[playerIdRef.current]
              );
            }
            navigate(`/play?roomId=${value?.name}`);
            window.location.href
              ?.toString()
              ?.toLocaleLowerCase()
              ?.split("=")[1] !== value?.name &&
              setCurrentRoom(CONFIG_MAP[value?.name]);
            setCurrentPlayer((curr) => ({
              ...curr,
              roomId: value?.name,
              x: value.resetPosition.x,
              y: value.resetPosition.y,
            }));
            resolve();
          }, 200);
        }).then(() => {
          setTimeout(() => {
            dispatch(setLoading(false));
          }, 200);
        });
        break;
      }
      case "POP_UP_QUESTION": {
        currentValueQA.current = value;
        document.addEventListener("keydown", listenerPressKeyX);
        document.addEventListener("click", (event: any) => {
          if (event) {
            window.innerWidth <= 1024 &&
              Math.abs((clickPositionMap?.current?.x as number) - value?.x) <
                2 &&
              Math.abs((clickPositionMap?.current?.x as number) - value?.x) <
                2 &&
              dispatch(setShowQuestionModal(true));
          }
        });
        break;
      }
      case "POP_UP_QUIZ": {
        currentValueQuiz.current = value;
        document.addEventListener("keydown", (event: any) => {
          if (event.keyCode === 88 || event.key === "x" || event.key === "X") {
            dispatch(setShowQuizModal(true));
          }
        });

        document.addEventListener("click", (event: any) => {
          if (event) {
            window.innerWidth <= 1024 &&
              Math.abs((clickPositionMap?.current?.x as number) - value?.x) <
                2 &&
              Math.abs((clickPositionMap?.current?.x as number) - value?.x) <
                2 &&
              dispatch(setShowQuizModal(true));
          }
        });
        break;
      }
      default:
        break;
    }
  }
  function handleSetPositionPlayerCurrent(x: number, y: number) {
    const playerId = playerIdRef.current;
    if (!playerId) return;
    listPlayersRef.current[playerId].x = x;
    listPlayersRef.current[playerId].y = y;
    set(playerRef.current, listPlayersRef.current[playerId]);
  }
  function handleArrowPress(xChange = 0, yChange = 0) {
    const playerId = playerIdRef.current;
    if (!playerId) return;
    if (!listPlayersRef.current[playerId]) return;

    const newX = listPlayersRef.current[playerId].x + xChange;
    const newY = listPlayersRef.current[playerId].y + yChange;
    if (!isSolid(currentRoom.map, newX, newY)) {
      listPlayersRef.current[playerId].x = newX;
      listPlayersRef.current[playerId].y = newY;
      let currentState = listPlayersRef.current[playerId].state;
      if (currentState === 3) {
        currentState = 1;
      } else {
        currentState++;
      }
      listPlayersRef.current[playerId].state = currentState;
      if (xChange === 1) {
        listPlayersRef.current[playerId].direction = "right";
      }
      if (xChange === -1) {
        listPlayersRef.current[playerId].direction = "left";
      }
      if (yChange === 1) {
        listPlayersRef.current[playerId].direction = "bottom";
      }
      if (yChange === -1) {
        listPlayersRef.current[playerId].direction = "top";
      }

      set(playerRef.current, listPlayersRef.current[playerId]);
      document.removeEventListener("keydown", listenerPressKeyX);

      if (currentRoom?.actions?.[`${newX},${newY}`]?.password) {
        dispatch(setShowModalPassword(true));
        dispatch(
          setPasswordOld(currentRoom?.actions?.[`${newX},${newY}`]?.password)
        );
      } else {
        isPerformAction(currentRoom, newX, newY, handleActionPlayer);
      }

      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    // initEventListener();
    const ArrowUp = new KeyPressListener("ArrowUp", () =>
      handleArrowPress(0, -1)
    );
    const ArrowDown = new KeyPressListener("ArrowDown", () =>
      handleArrowPress(0, 1)
    );
    const ArrowLeft = new KeyPressListener("ArrowLeft", () =>
      handleArrowPress(-1, 0)
    );
    const ArrowRight = new KeyPressListener("ArrowRight", () =>
      handleArrowPress(1, 0)
    );

    return () => {
      ArrowUp.unbind();
      ArrowDown.unbind();
      ArrowLeft.unbind();
      ArrowRight.unbind();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoom.id]);

  const handleDirectPlayer = async () => {
    setTimeout(async () => {
      if (time) clearInterval(time);
      const gameContainer = document.querySelector("#game-container");
      if (!gameContainer) return;
      const playerId = playerIdRef.current;
      if (!playerId) return;

      try {
        const start: Point = {
          x: listPlayersRef.current[playerId].y,
          y: listPlayersRef.current[playerId].x,
        };
        const goal: Point = {
          x: clickPositionMap.current.y as number,
          y: clickPositionMap.current.x as number,
        };
        const race = astar(currentRoom.map, start, goal);

        if (race && race.length) {
          race.push(goal);
        }

        if (race?.length)
          for (let i = 0; i < race.length - 1; i++) {
            const position = race[i];
            const positionNext = race[i + 1];
            const newX = positionNext.y - position.y;
            const newY = positionNext.x - position.x;
            const isMoving = handleArrowPress(newX, newY);
            await new Promise((resolve, reject) => {
              time = setTimeout(async () => {
                if (!isMoving) {
                  handleArrowPress(-newX, -newY);
                  reject(1);
                }
                resolve(1);
              }, 200);
            });
          }
      } catch (error) {
        console.log(error);
      }
    }, 0);
  };

  //demo map
  // dispatch(setPassword(""));
  useEffect(() => {
    if (password === passwordOld) {
      dispatch(setShowModalPassword(false));
      const handleArrowPress = (xChange = 0, yChange = 0) => {
        const playerId = playerIdRef.current;
        if (!playerId) return;
        if (!listPlayersRef.current[playerId]) return;

        const newX = listPlayersRef.current[playerId].x + xChange;
        const newY = listPlayersRef.current[playerId].y + yChange;
        if (!isSolid(currentRoom.map, newX, newY)) {
          listPlayersRef.current[playerId].x = newX;
          listPlayersRef.current[playerId].y = newY;
          let currentState = listPlayersRef.current[playerId].state;
          if (currentState === 3) {
            currentState = 1;
          } else {
            currentState++;
          }
          listPlayersRef.current[playerId].state = currentState;
          if (xChange === 1) {
            listPlayersRef.current[playerId].direction = "right";
          }
          if (xChange === -1) {
            listPlayersRef.current[playerId].direction = "left";
          }
          if (yChange === 1) {
            listPlayersRef.current[playerId].direction = "bottom";
          }
          if (yChange === -1) {
            listPlayersRef.current[playerId].direction = "top";
          }

          set(playerRef.current, listPlayersRef.current[playerId]);
          document.removeEventListener("keydown", listenerPressKeyX);

          isPerformAction(currentRoom, newX, newY, handleActionPlayer);

          return true;
        } else {
          return false;
        }
      };
      // Gọi hàm handleArrowPress với các giá trị mặc định
      handleArrowPress();
    } else {
      dispatch(setError(true));
    }
  }, [password]);

  const removeClickPlayerMap = () => {
    const gameContainer = document.querySelector("#game-container");
    if (!gameContainer) return;

    gameContainer.removeEventListener("click", handleDirectPlayer);
  };

  const addClickPlayerMap = () => {
    const gameContainer = document.querySelector("#game-container");
    if (!gameContainer) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gameContainer.addEventListener("click", handleDirectPlayer);
  };
  useEffect(() => {
    addClickPlayerMap();
    return () => {
      removeClickPlayerMap();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentRoom.id,
    isLoadingGame,
    document.querySelector("#game-container"),
  ]);
  function initGame() {
    const allPlayersRef = ref(db, `players`);
    const allMessagesRef = ref(db, `messages/${currentRoom.id}`);

    // remove old message
    get(child(ref(db), `messages/${currentRoom.id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const resSnapshot = snapshot.val();
          Object.entries(resSnapshot).forEach((item: any) => {
            const messageTimestamp = new Date(item[1].created_date);
            const specifiedMinutes = 30;
            const isMoreThanSpecifiedMinutesPast =
              isInputDateMoreThanSpecifiedMinutesPastCurrentDate(
                messageTimestamp,
                specifiedMinutes
              );
            if (isMoreThanSpecifiedMinutesPast) {
              const specificMessage = ref(
                db,
                `messages/${currentRoom.id}/${item[0]}`
              );
              remove(specificMessage);
            }
          });
        } else {
          // console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    onValue(allMessagesRef, (snapshot) => {
      const messageSnapshot = snapshot.val() || {};
      setMessages(messageSnapshot);
    });
    onValue(allPlayersRef, (snapshot) => {
      const playersSnapshot = snapshot.val() || {};
      simulateFetching(2).then(() => {
        dispatch(setLoadingGame(false));
      });
      Object.entries(playersSnapshot).forEach(([id, value]: any) => {
        if (value.roomId !== currentRoom.id) {
          delete playersSnapshot[id];
        }
      });
      //   console.log("playersSnapshot", playersSnapshot);
      setPlayers(playersSnapshot);
      listPlayersRef.current = playersSnapshot;
    });
    // initHandleMoveOnClick();
  }

  useEffect(() => {
    localStorage.removeItem("currentPlayer");
    onAuthStateChanged(auth, (user) => {
      //   console.log("user", user);
      if (user) {
        const uid = user?.uid;
        const refPlayerFirebase = ref(db, `players/${uid}`);
        playerIdRef.current = uid;
        playerRef.current = refPlayerFirebase;
        const initPlayer = {
          id: uid,
          roomId: currentRoom.id,
          name: "guest",
          direction: "down",
          state: 1,
          avatar: "character1",
          x: currentRoom.startPosition.x,
          y: currentRoom.startPosition.y,
        };

        set(refPlayerFirebase, initPlayer);
        setCurrentPlayer(initPlayer);
        if (roomIdFromParams) {
          setCurrentPlayer({
            ...initPlayer,
            roomId: searchParams.get("roomId") as string,
            x: CONFIG_MAP[roomIdFromParams].startPosition.x,
            y: CONFIG_MAP[roomIdFromParams].startPosition.y,
          });
        }
        onDisconnect(refPlayerFirebase).remove();
      }
    });

    signInAnonymously(auth)
      .then(() => {})
      .catch((error) => {
        console.log("error", error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoom.id]);

  useEffect(() => {
    if (currentPlayer.id) {
      const refPlayerFirebase = ref(db, `players/${currentPlayer.id}`);

      set(refPlayerFirebase, currentPlayer);
      setCurrentPlayer(currentPlayer);
      if (currentPlayer) setCurrentRoom(CONFIG_MAP[currentPlayer.roomId]);
    }
  }, [currentPlayer]);

  const contextValue: GamePlayContextProps = {
    playerId: playerIdRef.current,
    messages,
    setCurrentPlayer,
    respawnAction,
    setCurrentRoom,
    playerRef,
    players,
    currentRoom,
    currentPlayer,
    clickPositionMap,
  };

  return (
    <GamePlayContext.Provider value={contextValue}>
      {children}
    </GamePlayContext.Provider>
  );
};
