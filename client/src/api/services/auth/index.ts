import { instance } from "../../constants";

export type SignUpDataType = {
    username: string;
    password: string;
    email: string;
}; 
export type SignInDataType = {
    password: string;
    email: string;
}; 

export const signUpService = async (data : SignUpDataType) =>{
 const res = await instance.post("/auth/signUp",data);
 return res.data ;
}
export const signInService = async (data : SignInDataType) =>{
    const res = await instance.post("/auth/signIn",data);
    return res.data ;
   }