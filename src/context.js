import { createContext,useReducer } from "react";
import {reducer} from './reducer'
export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order:[],
    isBasketShow:false,
    alterName:''
}
export const ContextProvider = ({children})=>{
    const [value,dispatch] = useReducer(reducer,initialState);

    value.closeAlert = ()=>{
        dispatch({type:'CLOSE_ALERT'})
    }

    value.removeFromBasket = (itemId)=>{
        dispatch({type:'REMOVE_FROM_BASKET',payload:{id:itemId}})
    }

    value.addToBasket=(item)=>{
        dispatch({type:'ADD_TO_BASKET',payload:item})
    }

    value.plusQuantity=(id)=>{
        dispatch({type:'PLUS_QUANTITY',payload:{id:id}})
    }
    value.minusQuantity=(id)=>{
        dispatch({type:'MINUS_QUANTITY',payload:{id:id}})
    }
    value.handleBasketShow=()=>{
        dispatch({type:'TOGGLE_BASKET'})
    }
    value.setGoods = (data)=>{
        dispatch({type:"SET_GOODS",payload:data})
    }
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}