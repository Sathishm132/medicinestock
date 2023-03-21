import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

import Stockcontext from './Stockcontext'
const defaultvalue={
    stockitems:[]
}
const stockreducer=(state,action)=>{
    if(action.type==="replace"){
      
    return{
        stockitems:action.items
    }    
    
    }
    if(action.type==="Add"){
        const existingindex=state.stockitems.findIndex((item)=>item.medicinename===action.item.medicinename);
        const existingitem= state.stockitems[existingindex]
        let updatedstock
        if(existingitem){
         const updateditem={...existingitem,quantity :existingitem.quantity+action.item.quantity}
         updatedstock=[...state.stockitems]
         updatedstock[existingindex]=updateditem
         console.log(existingitem)

         axios.put(`https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/medicine/${existingitem.id}.json/`,updateditem)

        }
        else{
            updatedstock=state.stockitems.concat(action.item)
            axios.post("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/medicine/.json",action.item)
            
         
           
        }
     
        return{stockitems:updatedstock}
    }
    if(action.type==="bill"){
        console.log(action.item.medicinename)
        const existingindex=state.stockitems.findIndex((item)=>item.medicinename===action.item.medicinename);
        const existingitem= state.stockitems[existingindex]
        let updatedstock
        if(existingitem){
         
         updatedstock=[...state.stockitems]
         updatedstock[existingindex]=action.item
         console.log(updatedstock)
         axios.put(`https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/medicine/${existingitem.id}.json/`,action.item)
    

    }
    return{stockitems:updatedstock}
}
    

}
const Stockprovider = (props) => {
    const[stockstate,dispatch]=useReducer(stockreducer,defaultvalue);
    useEffect( ()=>{
        const fetch=async()=>{
        const response= await axios.get("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/medicine/.json")
        let fetchitems=[]
        for (let key in response.data) {

            fetchitems.push({ ...response.data[key], id: key });}
        dispatch({type:"replace",items:fetchitems})}
        fetch()


        }
        
     ,[])
    
       
    const additenhandler=(item)=>{
        dispatch({type:"Add",item:item})
    }
    const billitemhandler=(item)=>{
        dispatch({type:"bill",item:item})
    }
    const contextvalue={
        stockitems:stockstate.stockitems,
        additem:additenhandler,
        billitem:billitemhandler,
    }
  return (
    <div>
        <Stockcontext.Provider value={contextvalue}>{props.children}</Stockcontext.Provider>
    </div>
  )
}

export default Stockprovider