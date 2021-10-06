
import Data from "./data.json" ;

const Users = {
    usersAndPasswords: Data ,
      
}



const usersReducer = (state = Users , action) => {
    
    return {users : state.usersAndPasswords };
}


export default usersReducer ;