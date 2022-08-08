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

    const [cancelled, setCancelled] = useState(false)

    const checkMemoryleak = ( action) => {
        if(!cancelled){
            dispatch(action)
        }
    }
     
    
    const InsertDoc = async (document) => {
        checkMemoryleak({
            type:'LOADING'
        })
        
     const newDocument = {...document, createdAt: Timestamp.now()}

      try {
         const InsertedDoc = await addDoc(collection(db, docCollection), newDocument)

         checkMemoryleak({
            type:"INSERT_DOC",
            payload: InsertedDoc
         })

            
        } catch (error) {
          
            checkMemoryleak({
            type:"ERROR",
            payload: error.message
          })  
        }
    }
   
   useEffect(() => {
    return () =>  setCancelled(true)
   }, [])
    
   
   return { InsertDoc, response }
}