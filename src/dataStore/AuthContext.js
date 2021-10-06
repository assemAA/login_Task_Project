import React from 'react';


const AuthenticateContext = React.createContext ({
    'userName' : localStorage.getItem('userName'),
    'token' : localStorage.getItem('token') ,
})

export default AuthenticateContext ;