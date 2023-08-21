import { useEffect } from "react";
import useLatest from "./useLatest";


/**
 * 组件卸载时运行
 * @param {() => void} fn
 */
const useUnmount = (fn: () => void) => {
  // useEffect(() => {
  //   return fn?.();
  // }, []);
  // 以上代码等同于下面👇🏻
  const fnRef = useLatest(fn);
  useEffect(() => () => fnRef.current(),[fnRef])
};

export default useUnmount;
