import * as api from "../api/index"
import {AUTH} from "../constans/actionConstat"

export const Signin=(userAuth,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.getSignIn(userAuth)
        // console.log(data,"data")
        dispatch({type:AUTH,payload:data});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const Signup=(userAuth,navigate)=>async(dispatch)=>{
    try {
        // console.log('Signup')
        const {data}=await api.getSignUp(userAuth)

        dispatch({type:AUTH,payload:data});
        navigate('/');
    } catch (error) {
        console.log (error);
    }
}
