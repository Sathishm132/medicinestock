import React, { createContext } from 'react'

const Stockcontext = createContext({
    stockitems:[],
    additem:(item)=>{},
    billitem:(item)=>{}
})

export default Stockcontext