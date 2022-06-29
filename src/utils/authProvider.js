  var md5= require("md5");

  export const authProvider = {
    
    // authentication
    login: ({ username, password }) => {
      const request = new Request(
        "/v1/backend/login",
        {
          method: 'POST',
          body: JSON.stringify({"username":username, "password":md5(password) }),
          headers: new Headers({ 'Content-Type': 'application/json' }),   credentials: 'include',
        },
      );
      return fetch(request)
        .then((response) => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((auth) => {
          localStorage.setItem(
            'auth',
            username
          );
          localStorage.setItem(
            'permissions',
            auth.permissions
          );
          localStorage.setItem(
            'user_id',
            auth.user_id
          );
        })
        .catch(() => {
          throw new Error('Network error');
        });
    },
    checkError: (error) => {
      const status = error.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem('auth');
        return Promise.reject();
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
    },
    checkAuth: () =>
      localStorage.getItem('auth')
        ? Promise.resolve()
        : Promise.reject({ message: 'login required' }),
    logout: () => {
        const request = new Request(
        "/v1/backend/logout",
        {
          method: 'GET',
          headers: new Headers({ 'Content-Type': 'application/json' }),   credentials: 'include',
        },
      );
      return fetch(request)
        .then((response) => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          localStorage.removeItem('auth');
          localStorage.removeItem('user_id');
          localStorage.removeItem('permissions');
        })
        .catch(() => {
          throw new Error('Network error');
          /*localStorage.removeItem('auth');
          return Promise.reject();*/
        });
    },
    getIdentity: () => {
      try {
        const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'));
        return Promise.resolve({ id, fullName, avatar });
      } catch (error) {
        return Promise.reject(error);
      }
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
       return role ? Promise.resolve(role) : Promise.reject();
    }
  };