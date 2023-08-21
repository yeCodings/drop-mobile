import { useRef } from 'react';

/**
 * 获取最新的 value
 * @template T
 * @param {T} value
 * @return {*}
 */
const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
