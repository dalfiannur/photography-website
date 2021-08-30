import { navigate } from "gatsby-link";
import React, { FC, useState } from "react";
import { handleLogin } from '../../../services/auth';
const LoginPage: FC<{
  path: string;
}> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const doLogin = () => {    
    const isLogged = handleLogin({ username, password })
    console.log(isLogged);
    
    if (isLogged) {
      navigate('/admin');
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        <label>Username</label>
        <input
          type="text"
          className="border-2"
          onChange={(v) => setUsername(v.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="border-2"
          onChange={(v) => setPassword(v.target.value)}
        />

        <button onClick={doLogin}>Login</button>
      </div>

    </div>
  )
}

export default LoginPage;