import { db } from "@/lib/firebase";
import { ref, set } from "firebase/database";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setFirebasePlayer(userId: string, payload: any) {
  const refPlayerFirebase = ref(db, `players/${userId}`);
  set(refPlayerFirebase, payload);
}
