/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';

import {
  Button,
  Form,
  ImageUploader,
  Input,
} from 'antd-mobile';
import { useMutation } from '@apollo/client';
import { UPDATE } from './graphql/demo';
import { useUploadOSS } from './hooks/useUploadOSS';
import './App.css';

const App = () => {
  const uploadHandler = useUploadOSS();

  useEffect(() => {
    // 深色模式
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      'dark',
    );
  }, []);

  const [update] = useMutation(UPDATE);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHandler = async (v: any) => {
    await update({
      variables: {
        id: 'b74bd0cc-2269-424d-a0d8-d64c173f8fcc',
        params: {
          ...v,
        },
      },
    });
  };

  return (
    <div>
      <Form
        name="form"
        onFinish={onClickHandler}
        layout="horizontal"
        footer={(
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        )}
      >
        <Form.Item
          name="name"
          label="姓名"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="desc"
          label="简介"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="avatar"
          label="头像"
        >
          <ImageUploader
            maxCount={1}
            upload={uploadHandler}
          />
        </Form.Item>

      </Form>
    </div>
  );
};

export default App;
