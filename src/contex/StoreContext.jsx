import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import {food_list} from './../assets/assets'



export const StoreContext = createContext(null);

const StoreContextProvader = (props)=>{

    const [cartItems, setCartItems]= useState({})
    
    const ContextValue ={
        food_list,
    }

    return(
        <StoreContext.Provider value={ContextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvader;