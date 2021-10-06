import React from 'react';
import LoginForm from './login'
import { BrowserRouter  , Redirect} from 'react-router-dom' ;
import AuthenticateContext from './dataStore/AuthContext' ;



class Home  extends React.Component {
    render() {  
        return ( <div>
        <AuthenticateContext.Consumer>{ (e) => e.userName && e.token ?
         <>
           <h1> hello from home page  </h1>
           </> : <> <BrowserRouter>
             <Redirect from='/home/' to="/" />
             <LoginForm />
            </BrowserRouter>
            </>

        }
            </AuthenticateContext.Consumer>
            </div>
        )
    }
}


export default Home ;