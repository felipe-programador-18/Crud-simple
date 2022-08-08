import { useEffect, useState, useReducer  } from "react";
import { db } from "../ManageFirebase/db";
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const Initial_State = {
    loading: null,
    error: null
}


const ManageState = (action, state) =>{
  
    switch(action.type){
     case "LOADING":
        return {loading: true, error: null}
     case "INSERT_DOC":
        return {loading: false, error: null}
     case "ERROR" :
        return {loading:false , error: action.payload}
       default:
        return state;       
    }

}




export const useInsertDocument = (docCollection) => {
   
    const [response, dispatch ] = useReducer(Initial_State, ManageState)

    const [document, setDocument] = useState(null)
    const[loading, setLoading] = useState(null)     
    const [cancelled, setCancelled] = useState(false)

    const checkMemoryleak = () => {
        return ;
    }
     

    useEffect(() => {
     
       const InsertDoc = async() => { 

        try {
            
        } catch (error) {
            
        }

       }
       
       InsertDoc()
    },[])






   useEffect(() => {
    return () => {}
   }, [])



    return {   }
}