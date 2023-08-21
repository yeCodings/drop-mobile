import { useCallback, useState } from 'react';
import useMount from './useMount';

interface IOptions {
  params: Record<string, string>;
  manual?: boolean;
  onSuccess?: (res: unknown) => void;
  onError?: (err: unknown) => void;
}

/**
 * 组件初始化，发送请求获取数据
 *
 * 手动触发请求
 *
 * @param {(params: Record<string, string>) => Promise<unknown>} service
 * @param {Record<string, string>} params
 * @return {*}
 */
const useRequest = (
  // 定义一个函数类型的参数 service，用于发送请求获取数据
  service: (params: Record<string, string>) => Promise<unknown>,

  // 定义一个对象类型的参数 params，用于传递请求参数
  options: IOptions,
) => {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const init = useCallback(
    (curParams: Record<string, string>) => {
      setLoading(true);
      return service(curParams)
        .then((res) => {
          setData(res);
          setLoading(false);
          if (options.onSuccess) {
            options.onSuccess(res);
          }
        })
        .catch((error) => {
          setLoading(false);
          if (options.onError) {
            options.onError(error);
          }
        });
    },
    [service, options],
  );

  useMount(() => {
    if (!options.manual) {
      init(options.params);
    }
  });

  const run = (runParams: Record<string, string>) => init(runParams);

  return { loading, data, run };
};

export default useRequest;
