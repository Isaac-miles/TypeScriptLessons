import { ReactNode } from "react"

type CountProps = {
  children: ReactNode
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({setCount, children}:CountProps) => {

  return (
    <>
        <h1>{children}</h1>
    <button onClick={()=>setCount(prev=>prev +1)}> + </button>
    <button onClick={()=>setCount(prev=>prev -1)}> - </button>
    </>

  )
}

export default Counter