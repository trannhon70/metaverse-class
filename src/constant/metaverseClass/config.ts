import meeting from "@/assets/items/clock.png";
import dragon1 from "@/assets/items/dragon1.png";
import dragon2 from "@/assets/items/dragon2.png";
import rewardXmas from "@/assets/items/rewardXmas.jpg";
import mascot from "@/assets/items/mascot.png";
import santa from "@/assets/items/santa.png";
import teleport from "@/assets/items/teleport.gif";
import teleport1 from "@/assets/items/teleport1.gif";
import teleport2 from "@/assets/items/teleport2.png";
import lobby from "@/assets/maps/lobby.jpg";
import roomMap from "@/assets/maps/roomMap.png";
import schoolMap from "@/assets/maps/schoolMap.jpg";
import xmas_etrance from "@/assets/maps/xmas_etrance.jpeg";
import xmas_room from "@/assets/maps/xmas_room.png";
import black_elve from "@/assets/npc/black_elve.png";
import blue_elve from "@/assets/npc/blue_elve.png";
import green_elve from "@/assets/npc/green_elve.png";
import purple_elve from "@/assets/npc/purple_elve.png";
import red_elve from "@/assets/npc/red_elve.png";
import trick_elve from "@/assets/npc/trick_elve.png";
import xmas_final from "@/assets/maps/xmas_final.jpg";
import xmasVocal from "@/assets/sounds/xmasVocal.mp3";
import xmasOST from "@/assets/sounds/Xmas OST.mp3";
import lobbySound from "@/assets/sounds/lobby.mp3";
import roomSound from "@/assets/sounds/room.mp3";
import schoolSound from "@/assets/sounds/school.mp3";
import { ConfigMapType } from "@/types/map";
import {
  EXMAS_ETRANCE_MAP,
  EXMAS_FINAL_MAP,
  EXMAS_GOAL_MAP,
  EXMAS_ROOM_MAP,
  LOBBY_MAP,
  ROOM_MAP,
  SCHOOL_MAP,
} from "./maps/class";
export const CELL_SIZE = window.innerWidth <= 1024 ? 24 : 32;
export const ROWS = 30;
export const COLS = 30;
export const CONFIG_MAP: ConfigMapType = {
  lobby: {
    id: "lobby",
    type: "lobby",
    sound: lobbySound,
    rows: 20,
    cols: 30,
    map: LOBBY_MAP,
    image: lobby,
    startPosition: { x: 13, y: 9 },
    actions: {
      "15,9": {
        id: "door_to_room",
        tooltip: "Back to school",
        type: "CHANGE_ROOM",
        value: {
          name: "school",
          resetPosition: {
            x: 13,
            y: 10,
          },
        },
        image: teleport,
      },
      "17,6": {
        id: "robyn",
        type: "CHANGE_ROOM",
        value: {
          name: "robyn",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        styling: "scale-150",
        label: "Robyn",
      },
      "13,6": {
        id: "simone",
        type: "CHANGE_ROOM",
        value: {
          name: "simone",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Simone",
        styling: "scale-150",
      },
      "11,7": {
        id: "zamo",
        type: "CHANGE_ROOM",
        value: {
          name: "zamo",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Zamo",
        styling: "scale-150",
      },
      "8,9": {
        id: "gabriela",
        type: "CHANGE_ROOM",
        value: {
          name: "gabriela",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Gabriela",
        styling: "scale-150",
      },
      "10,10": {
        id: "lindsay",
        type: "CHANGE_ROOM",
        value: {
          name: "lindsay",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Lindsay",
        styling: "scale-150",
      },
      "12,12": {
        id: "stephen",
        type: "CHANGE_ROOM",
        value: {
          name: "stephen",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Stephen",
        styling: "scale-150",
      },
      "15,13": {
        id: "kathy",
        type: "CHANGE_ROOM",
        value: {
          name: "kathy",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Kathy",
        styling: "scale-150",
      },
      "18,12": {
        id: "melissa",
        type: "CHANGE_ROOM",
        value: {
          name: "melissa",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Melissa",
        styling: "scale-150",
      },
      "20,10": {
        id: "newTeacher",
        type: "CHANGE_ROOM",
        value: {
          name: "newTeacher",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "New teacher",
        styling: "scale-150",
      },
      "22,9": {
        id: "simon",
        type: "CHANGE_ROOM",
        value: {
          name: "simon",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Simon",
        styling: "scale-150",
      },
      "19,7": {
        id: "lisa",
        type: "CHANGE_ROOM",
        value: {
          name: "lisa",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Lisa",
        styling: "scale-150",
      },
      "20,8": {
        id: "martene",
        type: "CHANGE_ROOM",
        value: {
          name: "martene",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Martene",
        styling: "scale-150",
      },
      "15,6": {
        id: "amanda",
        type: "CHANGE_ROOM",
        value: {
          name: "amanda",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Amanda",
        styling: "scale-150",
      },
      "10,8": {
        id: "keeaasha",
        type: "CHANGE_ROOM",
        value: {
          name: "keeaasha",
          resetPosition: {
            x: 16,
            y: 6,
          },
        },
        image: teleport1,
        label: "Keeaasha",
        styling: "scale-150",
      },
      // "2,10": {
      //   id: "demo",
      //   type: "CHANGE_ROOM",
      //   value: {
      //     name: "demo",
      //     resetPosition: {
      //       x: 16,
      //       y: 6,
      //     },
      //   },
      //   image: teleport1,
      //   styling: "scale-150",
      //   label: "demo",
      //   password: "75167229",
      // },
    },
  },
  school: {
    id: "school",
    type: "school",
    sound: schoolSound,
    rows: 19,
    cols: 30,
    map: SCHOOL_MAP,
    image: schoolMap,
    startPosition: { x: 12, y: 11 },
    actions: {
      "14,9": {
        id: "door_to_room",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "lobby",
          resetPosition: {
            x: 15,
            y: 10,
          },
        },
        image: teleport,
      },
      "13,8": {
        id: "popup",
        tooltip: "Welcome",
        type: "POP_UP_QUESTION",
        image: mascot,
      },
      "7,6": {
        id: "door_to_room",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_etrance",
          resetPosition: {
            x: 31,
            y: 41,
          },
        },
        image: teleport,
      },
      // "6,6": {
      //   id: "popup_santa",
      //   tooltip: "Christmas Event coming soon!",
      //   type: "POP_UP_QUESTION",
      //   image: santa,
      //   styling: "scale-[1.5]",
      // },
      "6,6": {
        id: "popup_santa_1",
        tooltip:
          " MERRY CHRISTMAS! PRESS 'X' TO READ GUIDELINE BEFORE YOU TRAVEL TO SANTA UNIVERSE!",
        type: "POP_UP_QUIZ",
        image: santa,
        styling: "scale-[1.5]",
        question:
          "You're about to travel through many realms in this galaxy to the infamous universe of Santa! Beware of dangers of tricky elves as they may lure you to lost Christmas.\nFind the wonderful 5 elementary elves and collect the keywords. You'll receive the treat on 23rd December onward.",
        isQuiz: true,
        isLowerCase: true,
        value: {
          x: 6,
          y: 6,
        },
      },
    },
  },
  xmas_etrance: {
    id: "xmas_etrance",
    type: "xmas_etrance",
    sound: xmasVocal,
    rows: 60,
    cols: 60,
    map: EXMAS_ETRANCE_MAP,
    image: xmas_etrance,
    startPosition: { x: 31, y: 41 },
    actions: {
      "21,25": {
        id: "door_to_room_1",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_etrance",
          resetPosition: {
            x: 9,
            y: 30,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "15,26": {
        id: "door_to_room_2",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_etrance",
          resetPosition: {
            x: 31,
            y: 41,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "31,31": {
        id: "door_to_room_3",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 29,
            y: 30,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "21,26": {
        id: "popup_dragon_1",
        tooltip: "HI THERE! BEAT ME OR YOU SHALL NOT PASS",
        type: "POP_UP_QUIZ",
        image: dragon1,
        styling: "scale-[2.5]",
        question: "SANTA CLAUS LIVES IN THE _______ POLE",
        answer: "North",
        value: {
          x: 21,
          y: 26,
        },
      },
      "37,43": {
        id: "door_to_room_3",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_etrance",
          resetPosition: {
            x: 42,
            y: 44,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "36,43": {
        id: "popup_dragon_2",
        tooltip: "HI THERE! BEAT ME OR YOU SHALL NOT PASS",
        type: "POP_UP_QUIZ",
        image: dragon1,
        styling: "scale-[2.5]",
        question: "RUDOLPH IS A REINDEER WITH A RED _______",
        answer: "Nose",
        value: {
          x: 36,
          y: 43,
        },
      },
      "44,53": {
        id: "door_to_room_4",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_etrance",
          resetPosition: {
            x: 47,
            y: 52,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "43,53": {
        id: "popup_dragon_3",
        tooltip: "HI THERE! BEAT ME OR YOU SHALL NOT PASS",
        type: "POP_UP_QUIZ",
        image: dragon1,
        styling: "scale-[2.5]",
        question: "THE MOST POPULAR CHRISTMAS TREE DECORATION IS A _______",
        answer: "Star",
        value: {
          x: 43,
          y: 53,
        },
      },
      "23,44": {
        id: "popup_dragon_4",
        tooltip: "HI THERE! BEAT ME OR YOU SHALL NOT PASS",
        type: "POP_UP_QUIZ",
        image: dragon1,
        styling: "scale-[2.5]",
        question: "THE TRADITIONAL CHRISTMAS DESSERT IS A _______ CAKE",
        answer: "Fruit",
        value: {
          x: 23,
          y: 44,
        },
      },
      "41,38": {
        id: "popup_dragon_5",
        tooltip: "HI THERE! BEAT ME OR YOU SHALL NOT PASS",
        type: "POP_UP_QUIZ",
        image: dragon1,
        styling: "scale-[2.5]",
        question: 'THE MOST COMMON CHRISTMAS GREETING IS "MERRY _______"',
        answer: "Christmas",
        value: {
          x: 41,
          y: 38,
        },
      },
      "47,39": {
        id: "door_to_room_5",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_etrance",
          resetPosition: {
            x: 31,
            y: 41,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "58,48": {
        id: "door_to_room_6",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_etrance",
          resetPosition: {
            x: 31,
            y: 41,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "37,46": {
        id: "npc_elve_1",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: LAUGH",
        value: {
          x: 37,
          y: 46,
        },
      },
      "25,46": {
        id: "npc_elve_2",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: CARROT",
        value: {
          x: 25,
          y: 46,
        },
      },
      "26,54": {
        id: "npc_elve_3",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: WITCH",
        value: {
          x: 26,
          y: 54,
        },
      },
      "13,26": {
        id: "npc_elve_4",
        tooltip: "OH YOU FOUND ME. PRESS 'X' TO RECEIVE A TREAT!",
        type: "POP_UP_QUIZ",
        image: red_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hohoho, here's one keyword for you: STAR",
        value: {
          x: 13,
          y: 26,
        },
      },
      "9,49": {
        id: "npc_elve_5",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: BELL",
        value: {
          x: 9,
          y: 49,
        },
      },
      "49,43": {
        id: "npc_elve_6",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: SNOW",
        value: {
          x: 49,
          y: 43,
        },
      },
      "57,48": {
        id: "npc_elve_7",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: WITCH",
        value: {
          x: 57,
          y: 48,
        },
      },
      "31,35": {
        id: "npc_elve_8",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: SNOW",
        value: {
          x: 31,
          y: 35,
        },
      },
      "12,43": {
        id: "npc_elve_9",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: BELL",
        value: {
          x: 12,
          y: 43,
        },
      },
      "20,34": {
        id: "npc_elve_10",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: CARROT",
        value: {
          x: 20,
          y: 34,
        },
      },
      "52,29": {
        id: "npc_elve_11",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: CARROT",
        value: {
          x: 52,
          y: 29,
        },
      },
      "39,24": {
        id: "npc_elve_12",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: BELL",
        value: {
          x: 39,
          y: 24,
        },
      },
    },
  },
  xmas_room: {
    id: "xmas_room",
    type: "xmas_room",
    sound: xmasOST,
    rows: 60,
    cols: 60,
    map: EXMAS_ROOM_MAP,
    image: xmas_room,
    startPosition: { x: 30, y: 30 },
    actions: {
      "26,23": {
        id: "popup_dragon_1",
        tooltip: "HI THERE! BEAT ME OR YOU SHALL NOT PASS",
        type: "POP_UP_QUIZ",
        image: dragon2,
        styling: "scale-[2.5]",
        question: "The color of Santa Claus's suit is red and _______",
        answer: "White",
        value: {
          x: 26,
          y: 23,
        },
      },
      "27,23": {
        id: "door_to_room_1",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 44,
            y: 17,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "47,15": {
        id: "door_to_room_2",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 45,
            y: 31,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "51,30": {
        id: "door_to_room_3",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 54,
            y: 54,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "43,52": {
        id: "door_to_room_4",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 38,
            y: 51,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "50,47": {
        id: "door_to_room_5",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 22,
            y: 39,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "32,37": {
        id: "door_to_room_6",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 41,
            y: 41,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "38,35": {
        id: "door_to_room_7",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 30,
            y: 30,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "30,32": {
        id: "door_to_room_8",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 30,
            y: 34,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "17,37": {
        id: "door_to_room_9",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 27,
            y: 13,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "29,11": {
        id: "door_to_room_10",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_goal",
          resetPosition: {
            x: 17,
            y: 33,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "22,50": {
        id: "door_to_room_11",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 17,
            y: 52,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "11,49": {
        id: "door_to_room_12",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 9,
            y: 34,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "9,30": {
        id: "door_to_room_13",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 11,
            y: 19,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "16,15": {
        id: "door_to_room_14",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 33,
            y: 29,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "10,14": {
        id: "door_to_room_15",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_room",
          resetPosition: {
            x: 28,
            y: 13,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "37,26": {
        id: "npc_elve_1",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: LAUGH",
        value: {
          x: 37,
          y: 26,
        },
      },
      "51,15": {
        id: "npc_elve_2",
        tooltip: "OH YOU FOUND ME. PRESS 'X' TO RECEIVE A TREAT!",
        type: "POP_UP_QUIZ",
        image: purple_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hohoho, here's one keyword for you: CAKE",
        value: {
          x: 51,
          y: 15,
        },
      },
      "18,39": {
        id: "npc_elve_3",
        tooltip: "OH YOU FOUND ME. PRESS 'X' TO RECEIVE A TREAT!",
        type: "POP_UP_QUIZ",
        image: blue_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hohoho, here's one keyword for you: SOCK",
        value: {
          x: 18,
          y: 39,
        },
      },
      "9,50": {
        id: "npc_elve_4",
        tooltip: "OH YOU FOUND ME. PRESS 'X' TO RECEIVE A TREAT!",
        type: "POP_UP_QUIZ",
        image: green_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hohoho, here's one keyword for you: DEER",
        value: {
          x: 9,
          y: 50,
        },
      },
      "13,14": {
        id: "npc_elve_5",
        tooltip: "OH YOU FOUND ME. PRESS 'X' TO RECEIVE A TREAT!",
        type: "POP_UP_QUIZ",
        image: black_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hohoho, here's one keyword for you: SANTA",
        value: {
          x: 13,
          y: 14,
        },
      },
      "29,38": {
        id: "npc_elve_6",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: LAUGH",
        value: {
          x: 29,
          y: 38,
        },
      },
      "42,39": {
        id: "npc_elve_7",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: WITCH",
        value: {
          x: 42,
          y: 39,
        },
      },
      "50,31": {
        id: "npc_elve_8",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: BELL",
        value: {
          x: 50,
          y: 31,
        },
      },
      "51,51": {
        id: "npc_elve_9",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: SNOW",
        value: {
          x: 51,
          y: 51,
        },
      },
      "30,47": {
        id: "npc_elve_11",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: WITCH",
        value: {
          x: 30,
          y: 47,
        },
      },
      "10,30": {
        id: "npc_elve_10",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: SNOW",
        value: {
          x: 10,
          y: 30,
        },
      },
    },
  },
  xmas_goal: {
    id: "xmas_goal",
    type: "xmas_goal",
    sound: xmasOST,
    rows: 40,
    cols: 60,
    map: EXMAS_GOAL_MAP,
    image: xmas_room,
    startPosition: { x: 17, y: 33 },
    actions: {
      "34,31": {
        id: "door_to_room_1",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_goal",
          resetPosition: {
            x: 43,
            y: 24,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "36,7": {
        id: "npc_elve_red",
        tooltip: "OH YOU FOUND ME. PRESS 'X' TO RECEIVE A TREAT!",
        type: "POP_UP_QUIZ",
        image: red_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hohoho, here's one keyword for you: STAR",
        value: {
          x: 36,
          y: 7,
        },
      },
      "35,7": {
        id: "door_to_room_2",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_goal",
          resetPosition: {
            x: 28,
            y: 9,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "21,7": {
        id: "door_to_room_3",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_goal",
          resetPosition: {
            x: 26,
            y: 20,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "18,17": {
        id: "door_to_room_4",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_goal",
          resetPosition: {
            x: 13,
            y: 20,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "1,27": {
        id: "santa_popup_1",
        tooltip: "Hohoho! Christmas Party over here!",
        type: "POP_UP_QUIZ",
        isQuiz: true,
        image: santa,
        question: "Hohoho! Christmas Party over here!",
        value: {
          x: 1,
          y: 27,
        },

        styling: "scale-[1.5]",
      },
      "0,27": {
        id: "door_to_room_5",
        // tooltip: "Go to lobby",
        type: "CHANGE_ROOM",
        value: {
          name: "xmas_final",
          resetPosition: {
            x: 53,
            y: 43,
          },
        },
        image: teleport2,
        styling: "scale-[2.5]",
      },
      "23,37": {
        id: "npc_elve_1",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: LAUGH",
        value: {
          x: 23,
          y: 37,
        },
      },
      "33,36": {
        id: "npc_elve_2",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: SNOW",
        value: {
          x: 33,
          y: 36,
        },
      },
      "38,13": {
        id: "npc_elve_3",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: WITCH",
        value: {
          x: 38,
          y: 13,
        },
      },
      "24,9": {
        id: "npc_elve_4",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: CARROT",
        value: {
          x: 24,
          y: 9,
        },
      },
      "24,17": {
        id: "npc_elve_5",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: LAUGH",
        value: {
          x: 24,
          y: 17,
        },
      },
      "5,21": {
        id: "npc_elve_6",
        tooltip: "HOHOHO, PRESS 'X' TO RECEIVE A TRICK!",
        type: "POP_UP_QUIZ",
        image: trick_elve,
        isQuiz: true,
        styling: "scale-[1.5]",
        question: "Hahaha, here's one trick for you: SNOW",
        value: {
          x: 5,
          y: 21,
        },
      },
    },
  },
  xmas_final: {
    id: "xmas_final",
    type: "xmas_final",
    sound: xmasVocal,
    rows: 60,
    cols: 60,
    map: EXMAS_FINAL_MAP,
    image: xmas_final,
    startPosition: { x: 54, y: 43 },
    actions: {
      "36,41": {
        id: "popup_santa_1",
        tooltip: "Hohoho, press 'X' to check me out",
        type: "POP_UP_QUIZ",
        image: santa,
        styling: "scale-[2.5]",
        question: "RED GREEN PURPLE BLUE BLACK. WHAT'S THE SECRET CODE?",
        answer: "STAR DEER CAKE SOCK SANTA",
        value: {
          x: 36,
          y: 41,
        },
      },
      "28,38": {
        id: "npc_elve_1",
        tooltip: "Grats! Press 'X' to claim reward!",
        type: "POP_UP_QUIZ",
        image: green_elve,
        isQuiz: true,
        styling: "scale-[2.5]",
        question: "",
        reward: rewardXmas,
        value: {
          x: 28,
          y: 38,
        },
      },
      "30,38": {
        id: "npc_elve_2",
        tooltip: "Grats! Press 'X' to claim reward!",
        type: "POP_UP_QUIZ",
        image: purple_elve,
        isQuiz: true,
        styling: "scale-[2.5]",
        question: "",
        reward: rewardXmas,
        value: {
          x: 30,
          y: 38,
        },
      },
      "32,38": {
        id: "npc_elve_3",
        tooltip: "Grats! Press 'X' to claim reward!",
        type: "POP_UP_QUIZ",
        image: red_elve,
        isQuiz: true,
        styling: "scale-[2.5]",
        question: "",
        reward: rewardXmas,
        value: {
          x: 32,
          y: 38,
        },
      },
      "34,37": {
        id: "npc_elve_4",
        tooltip: "Grats! Press 'X' to claim reward!",
        type: "POP_UP_QUIZ",
        image: black_elve,
        isQuiz: true,
        styling: "scale-[2.5]",
        question: "",
        reward: rewardXmas,
        value: {
          x: 34,
          y: 37,
        },
      },
      "35,36": {
        id: "npc_elve_5",
        tooltip: "Grats! Press 'X' to claim reward!",
        type: "POP_UP_QUIZ",
        image: blue_elve,
        isQuiz: true,
        styling: "scale-[2.5]",
        question: "",
        reward: rewardXmas,
        value: {
          x: 35,
          y: 36,
        },
      },
    },
  },
  robyn: {
    id: "robyn",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 17,
            y: 7,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  simone: {
    id: "simone",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 13,
            y: 7,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  zamo: {
    id: "zamo",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 12,
            y: 8,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  gabriela: {
    id: "gabriela",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 11,
            y: 10,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  lindsay: {
    id: "lindsay",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 13,
            y: 11,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  stephen: {
    id: "stephen",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 16,
            y: 12,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  kathy: {
    id: "kathy",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 18,
            y: 9,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  melissa: {
    id: "melissa",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 18,
            y: 9,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  simon: {
    id: "simon",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 18,
            y: 9,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  newTeacher: {
    id: "newTeacher",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 18,
            y: 9,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  lisa: {
    id: "lisa",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 18,
            y: 9,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  keeaasha: {
    id: "keeaasha",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 12,
            y: 9,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  amanda: {
    id: "amanda",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 15,
            y: 7,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  martene: {
    id: "martene",
    type: "room",
    sound: roomSound,
    rows: 20,
    cols: 30,
    map: ROOM_MAP,
    image: roomMap,
    startPosition: { x: 16, y: 7 },
    actions: {
      "16,5": {
        id: "door_to_room",
        type: "CHANGE_ROOM",
        tooltip: "Leave room",
        value: {
          name: "lobby",
          resetPosition: {
            x: 18,
            y: 9,
          },
        },
        image: teleport1,
        styling: "scale-150",
      },
      "15,10": {
        id: "join_meeting",
        type: "JOIN_MEETING",
        image: meeting,
        styling: "scale-150",
      },
    },
  },
  // demo: {
  //   id: "demo",
  //   type: "room",
  //   sound: roomSound,
  //   rows: 20,
  //   cols: 30,
  //   map: ROOM_MAP,
  //   image: roomMap,
  //   startPosition: { x: 16, y: 7 },
  //   actions: {
  //     "16,5": {
  //       id: "door_to_room",
  //       type: "CHANGE_ROOM",
  //       tooltip: "Leave room",
  //       value: {
  //         name: "lobby",
  //         resetPosition: {
  //           x: 18,
  //           y: 9,
  //         },
  //       },
  //       image: teleport1,
  //       styling: "scale-150",
  //     },
  //     "15,10": {
  //       id: "join_meeting",
  //       type: "JOIN_MEETING",
  //       image: meeting,
  //       styling: "scale-150",
  //       active: false,
  //     },
  //   },
  // },
};
