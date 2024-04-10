login (username, password) {
    return config.post('/login', {'username': username, 'password': password})
      .then(res => {
        return res
      })
      .catch(err => {
        let error = new Error()
        if (err.response) {
          if (err.response.status === 401) {
            error.msg = 'Incorrect username or password'
            return error
          }
        } else {
          error.msg = 'Interenal server error occured'
          return error
        }
      })
  },

  register (username, password, email) {
    return config.post('/register', {'username': username, 'password': password, 'email': email})
      .then(res => {
        return res
      })
      .catch(err => {
        let error = new Error()
        if (err.response) {
          if (err.response.status === 409) {
            error.msg = 'Username already taken'
            return error
          }
        } else {
          error.msg = 'Interenal server error occured'
          return error
        }
      })
    }