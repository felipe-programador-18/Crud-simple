import React from 'react'
import { useState,useEffect  } from 'react'
import { db } from '../ManageFirebase/db'

import { collection,
    query,
    orderBy, 
    where,
    getDocs
    } from 'firebase/firestore'


export const useFetching = (docCollection, search=null, uid=null) => {
   
    const [documents, setDocument] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const [cancelled, setCancelled] = useState(false)
    
    
    useEffect(() => {
      const getDate = async () => {
      setLoading(false)

      const docReffered = await query(collection(db,docCollection))
      console.log("what have here", docReffered)

     try {
        let q;
        q = await query(docReffered)
        console.log(q)
            
        } catch (error) {
            
        }
    }





    },[])
 



    
    useEffect(() => {
    return () => {}
    },[])

    return{}
}