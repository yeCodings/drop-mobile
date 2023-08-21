import { useEffect } from "react";


/**
 * 组件加载时运行
 * @param {() => void} fn
 */
const useMount = (fn: () => void) => {
  
  // 使用 useEffect 钩子，传入一个空数组作为依赖项，确保副作用只在组件挂载时运行一次
  useEffect(() => {
    fn?.();
  }, [fn]);
};

export default useMount;
