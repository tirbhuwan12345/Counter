import React ,{createContext , useReducer} from "react";
  export const CounterContext = createContext();
const CouterStore = ({children})=>{
    // constants

    const INCRENMENT_value = "INCRENMENT";
    const DECREMENT_value = "DECREMENT";
    const INCREMENTBY_value = "INCREMENTBYVALUE";
    const RESET_value       = "RESET";
    const THEME_LIGHT = "LIGHT";
    const THEME_DARK = "DARK";
    //state
    const initialState = {count:0 , theme : THEME_LIGHT};

    // reducer function.
    const reducer = (state , action)=>{
        switch(action.type){
            case INCRENMENT_value:
                return {count:state.count+1};

            case DECREMENT_value:
                return {count:state.count-1};

            case INCREMENTBY_value :
                return {count:state.count+action.payload};
                
            case RESET_value :
                return {count:0};

            case THEME_LIGHT :
                return {...state , theme : THEME_LIGHT};
             
            case THEME_DARK :
                return {...state , theme :THEME_DARK };    
            
            default :
                 return {count:state.count};    
        }
    }


    //Action
     const INCREMENT = ()=>({type:INCRENMENT_value});
     const INCREMENTBYVALUE = payload => ({type:INCREMENTBY_value , payload});
     const DECREMENT = ()=>({type:DECREMENT_value});
     const RESET =()=>({type:RESET_value});
     const Switch_LIGHT = () => ({type : THEME_LIGHT });
     const Switch_Dark = () =>({type : THEME_DARK});
     
     

     const [state , dispatch] = useReducer(reducer , initialState);

    return(
        <div>
           <CounterContext.Provider
            
            value={{state ,dispatch ,INCREMENT ,DECREMENT ,RESET , INCREMENTBYVALUE ,Switch_LIGHT, Switch_Dark , THEME_LIGHT}}
           
           >
            {children}


           </CounterContext.Provider>

        </div>
    )
}
export default CouterStore;