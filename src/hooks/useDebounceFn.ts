import _ from "lodash";
import { useMemo, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounceFn(fn: any, wait: number) {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  const debounced = useMemo(
    () => _.debounce((...args) => fnRef.current(...args), wait),
    [wait]
  );
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}
