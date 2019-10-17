import React, { useState } from 'react';
import Form from './form';

export default () => {
  const [formData] = useState({
    username: '',
    password: '',
  });
  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ]);
  return (
    <div>
      <Form
        value={formData}
        fields={fields}
        buttons={
          (
            <>
              <button type="submit">提交</button>
              <button type="button">返回</button>
            </>
          )
        }
      />
    </div>
  );
};
