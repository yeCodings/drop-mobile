import { useQuery } from '@apollo/client';
import { GET_OSS_INFO } from '../graphql/oss';

export const useUploadOSS = () => {
  /**
   * 1. 获取到签名信息
   * 2. fetch post请求把参数传递到服务端
   */
  const { data: d } = useQuery(GET_OSS_INFO);

  const uploadHandler = async (file: File) => {
    const formData = new FormData();
    const data = d.getOSSInfo;
    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    const key = `images/${filename}`;

    formData.append('key', key); // 密匙
    formData.append('OSSAccessKeyID', data.accessId); //  访问ID
    formData.append('policy', data.policy); //  策略
    formData.append('success_action_status', '200'); //  成功状态码
    formData.append('signature', data.signature); //  签名
    formData.append('file', file); // 文件

    const res = await fetch(data.host, {
      method: 'POST',
      body: formData,
    });

    // 返回拼接好的地址
    return { url: res.url + key };
  };

  return uploadHandler;
};
