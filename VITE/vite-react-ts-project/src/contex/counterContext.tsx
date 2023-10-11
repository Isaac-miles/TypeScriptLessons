import { createContext,useReducer,ChangeEvent, ReactElement, useCallback,useContext } from "react";

export const initState: stateType = {count:0, userName:''}

type stateType ={
    count:number,
    userName:string
}

const enum REDUCER_ACTION_TYPE{
    INCREMENT,
    DECREMENT,
    NEW_INPUT
}

type ReducerAction ={
    type: REDUCER_ACTION_TYPE,
    payload?:string
}
const reducer = (state:stateType, action:ReducerAction):stateType=>{
    switch(action.type){
        case REDUCER_ACTION_TYPE.INCREMENT:
            return {...state,count:state.count+1}
        case REDUCER_ACTION_TYPE.DECREMENT:
            return {...state,count:state.count-1}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return {...state, userName:action.payload ?? ''}

        default:
            throw new Error()
    }
}

const useCounterContext = (initState:stateType)=>{
    const [state, dispatch] = useReducer(reducer, initState)

    const increment=useCallback(()=>dispatch({type:REDUCER_ACTION_TYPE.INCREMENT}),[])
    const decrement=useCallback(()=>dispatch({type:REDUCER_ACTION_TYPE.DECREMENT}),[])

    const handleTextInput = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        dispatch({type:REDUCER_ACTION_TYPE.NEW_INPUT, payload:e.target.value})
    },[])
    return {state, increment, decrement, handleTextInput}
}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType ={
    state:initState,
    increment:()=>{},
    decrement:()=>{},
    handleTextInput:(e:ChangeEvent<HTMLInputElement>)=>{},
}


type ChildrenType = {
    children?:ReactElement | undefined | ReactElement[]
}
export const CounterContext = createContext<UseCounterContextType>(initContextState)
export const CounterProvider = ({children, ...initState }:ChildrenType & stateType):ReactElement=>{
    return (
       <CounterContext.Provider value={useCounterContext(initState)} >{children}</CounterContext.Provider>
    )
}

type UseCounterHookType ={
    count:number
    increment:()=>void,
    decrement:()=>void,
}

export const useCounter = ():UseCounterHookType =>{
    const  {state:{count},increment,decrement} = useContext(CounterContext)
    return {count, increment, decrement}
}

type UseCounterTextHookType = {
    userName: string,
    handleTextInput:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const useCounterText = ():UseCounterTextHookType =>{
    const  {state:{userName}, handleTextInput} = useContext(CounterContext)
    return {userName, handleTextInput}
}