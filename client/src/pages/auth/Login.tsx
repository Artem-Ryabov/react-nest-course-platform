import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HTTPMethods } from '../../constants/httpMethods';
import { Paths } from '../../constants/routes';
import useHTTP from '../../hooks/useHTTP';

const Login = () => {
  const navigateTo = useNavigate();
  const httprequset = useHTTP();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    httprequset<{ token: string }>('api/auth/login', HTTPMethods.post, {
      Email: formData.get('email') as string,
      Password: formData.get('password') as string,
    }).then((res) => {
      console.log(res.data);
      document.cookie = `token=${res.data.token}`;
      navigateTo(Paths.main);
    });
  };

  return (
    <div>
      <span>Login</span>
      <form onSubmit={submitHandler}>
        <input type="text" name="email" />
        <input type="text" name="password" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
