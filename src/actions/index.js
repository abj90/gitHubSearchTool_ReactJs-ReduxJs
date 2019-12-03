import {getRepos, getUserData } from '../api/github';
import axios from "axios";

export const fetchUserRepos =(userName)=>{
    return async function (dispatch){
         const result = await getRepos(userName);    
         
         dispatch({
            type: "FETCH_USER_REPOS",
            payload: result
        })
    
    }
}

export const fetchUserData =(userName)=> {
    
    return async function (dispatch){
        
        const result = await getUserData(userName);
        
        const { user, orgs } = result;

        dispatch({
            type:"FETCH_USER_DATA",
            user,
            orgs
        });
    }
} 
    
     
      
  


