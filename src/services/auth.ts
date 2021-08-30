interface User {
  username: string;
  name: string;
  email: string;

}

const KEY = 'photography-user';

export const isBrowser = () => typeof window !== "undefined"
export const getUser = () => 
  isBrowser() && window.localStorage.getItem(KEY)
    ? JSON.parse(window.localStorage.getItem(KEY))
    : {}

const setUser = (user: User | null) => {
  if (user) {
    window.localStorage.setItem(KEY, JSON.stringify(user));
  } else {
    window.localStorage.removeItem(KEY);
  }
}

export const handleLogin = ({ username, password }): boolean => {  
  if (username === `qisk` && password === `1sampai8`) {
    setUser({
      username: `qisk`,
      name: `Qiandra`,
      email: `qiandra@example.org`,
    });

    return true;
  } else {
    return false
  }
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser(null)
  callback()
}