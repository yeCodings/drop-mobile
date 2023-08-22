import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FIND, UPDATE } from './graphql/demo';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const { loading, data } = useQuery(FIND, {
    variables: {
      id: 'b74bd0cc-2269-424d-a0d8-d64c173f8fcc',
    },
  });

  const [update] = useMutation(UPDATE);

  const onChangeNameHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setName(v.target.value);
  };

  const onChangeDescHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(v.target.value);
  };

  const onClickHandler = () => {
    update({
      variables: {
        id: 'b74bd0cc-2269-424d-a0d8-d64c173f8fcc',
        params: {
          name,
          desc,
        },
      },
    });
  };

  return (
    <div>
      <p>
        data:
        {JSON.stringify(data)}
        loading:
        {' '}
        {loading}
      </p>
      <p>
        name:
        <input onChange={onChangeNameHandler} />
      </p>
      <p>
        desc:
        <input onChange={onChangeDescHandler} />
      </p>
      <p>
        <button type="button" onClick={onClickHandler}>修改</button>
      </p>
    </div>
  );
};

export default App;
