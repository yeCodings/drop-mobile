/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';

import {
  Button,
  Calendar,
  Card,
  Form,
  Input,
} from 'antd-mobile';
import { useMutation, useQuery } from '@apollo/client';
import { FIND, UPDATE } from './graphql/demo';
import './App.css';

const App = () => {
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: 'b74bd0cc-2269-424d-a0d8-d64c173f8fcc',
    },
  });

  useEffect(() => {
    // 深色模式
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      'dark',
    );
  }, []);

  const [update] = useMutation(UPDATE);

  const onClickHandler = (v: unknown) => {
    update({
      variables: {
        id: 'b74bd0cc-2269-424d-a0d8-d64c173f8fcc',
        params: {
          ...(v as object),
        },
      },
    });
  };

  return (
    <div>
      <Calendar
        selectionMode="single"
        onChange={(val) => {
          // eslint-disable-next-line no-console
          console.log(val);
        }}
      />
      <Card>
        <p>
          data:
          {JSON.stringify(data)}
          loading:
          {' '}
          {loading}
        </p>
      </Card>

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

      </Form>
    </div>
  );
};

export default App;
