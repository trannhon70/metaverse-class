import { useCallback } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useBackHome(history: any) {
  const backToHome = useCallback(() => {
    history.goBack();
  }, [history]);
  return backToHome;
}
