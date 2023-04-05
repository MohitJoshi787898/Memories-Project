import {AUTH,LOGOUT} from "../constans/actionConstat"
const authReducer=(state={authData:null},action)=>{
    switch(action.type){
        case AUTH:
            console.log(action?.payload
                ,"dispatch")
            localStorage.setItem("Profile",JSON.stringify({...action?.payload
            }))
            return {...state, authData: action?.payload
            }
        case LOGOUT:
            localStorage.removeItem("Profile")
            return {...state, authData:null}
        default:
            return state
    }
}
export default authReducer;