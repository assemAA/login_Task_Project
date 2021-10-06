import React from 'react';
import Home from './home' ;
import LoginForm from './login'
import { BrowserRouter , Route , Redirect} from 'react-router-dom';
import AuthenticateContext from './dataStore/AuthContext' ;

class AuthenticateLogin extends React.Component {


    render() { 
        return <div>
            {(localStorage.userName && localStorage.token) ?
            <AuthenticateContext.Provider value={{
                'userName' : localStorage.getItem('userName'),
                'token' : localStorage.getItem('token') ,
            }}> 
            <BrowserRouter>
            <Route exact path='/home' component={Home}></Route>
            </BrowserRouter>
            </AuthenticateContext.Provider>
            : <BrowserRouter>
             <Redirect from='/home/' to="/" />
            <LoginForm />
            </BrowserRouter>
             }
            </div>
    }
}
 



  
export default AuthenticateLogin ;