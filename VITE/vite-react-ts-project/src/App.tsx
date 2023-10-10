import React,{useState,useEffect, useCallback} from 'react'

interface User{
    id:number,
    username:string
}
function App() {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState<User[] | null>()

    useEffect(()=>{
    console.log('mounting')
    console.log('users', users)
    return ()=>console.log('unmounting')
    }, [users])

  return (
    <div className='App'>
        <h1>{count}</h1>
        <button onClick={}> Add </button>
    </div>
  )
}

export default App
