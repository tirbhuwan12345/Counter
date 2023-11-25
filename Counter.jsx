import React , {useContext , useRef} from "react";
import { CounterContext } from "./CouterStore";
import { MdDarkMode } from "react-icons/md";
import { IoSunnySharp } from "react-icons/io5";

const Counter = ()=>{
    const {state ,dispatch ,INCREMENT ,DECREMENT ,RESET , INCREMENTBYVALUE ,Switch_LIGHT, Switch_Dark ,THEME_LIGHT}=useContext(CounterContext);
    const inputref =useRef(0);

  return(
    <section className={`h-screen flex justify-center items-center ${state.theme == THEME_LIGHT ? "bg-black text-white":"bg-white text-black"} `}>

       <button 
         className=" bg-black rounded-full p-2 fixed top-9 right-9 "
         onClick={e =>{
          if(state.theme == THEME_LIGHT) dispatch(Switch_Dark());
          else dispatch(Switch_LIGHT());
         }}
       >
         {state.theme == THEME_LIGHT ? (
           <MdDarkMode className="text-gray-300 text-3xl"/>
         ) : (
            <IoSunnySharp className="text-3xl text-yellow-300"/>
         )}
        </button> 
        
        <article className="">
            <h1 className="text-4xl font-semibold">
               Counter using Api+Reducer Hook
            </h1>
                <h2 className="text-4xl font-bold mt-3">{state.count}</h2>
            <div className=" flex ml-2 mt-[30px]   gap-4">
                <button onClick={()=>dispatch(INCREMENT())}
                  className="bg-green-400 text-white py-1 px-3 hover:bg-green-600 text-2xl"

                >
                    Increnment
                      
                </button>
                <button onClick={()=>dispatch(DECREMENT())}
                  className="bg-red-400 text-white py-1 px-3 hover:bg-red-600 text-2xl"

                >
                    Dcrement
                      
                </button>
                <button onClick={()=>dispatch(RESET())}
                  className="bg-cyan-400 text-white py-1 px-3 hover:bg-cyan-600 text-2xl"

                >
                    Reset
                      
                </button>
            </div>
                <form className="mt-3" >
                    <input type="number" placeholder="Enter Digit..." ref={inputref} 
                      onChange={e =>{
                        inputref.current = Number(e.target.value);
                      }}
                      className=" border-solid border-2 border-sky-500"
                    />
                </form>
                <button 
                  onClick={()=>dispatch(INCREMENTBYVALUE(inputref.current))}
                  className="bg-green-700 text-white py-1 px-3 mt-7 hover:bg-green-900 text-2xl"
                >
                  Increnment by value
                </button>


        </article>
    </section>
  );  
}
export default Counter;
