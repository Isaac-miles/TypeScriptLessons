import { useState,useEffect } from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import useRefreshToken from "../hooks/useRefreshToken"
import { useNavigate, useLocation } from "react-router-dom"

const Users = () => {
    const [users, setusers] = useState()
    const axiosPrivate = useAxiosPrivate()
    const refresh = useRefreshToken()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async ()=>{
            try {
                const response = await axiosPrivate.get('/users',{
                    signal:controller.signal
                })
                console.log(response.data)  
                isMounted && setusers(response.data)
            } catch (error) {
                if (error instanceof Error){
                    console.log(error.message)
                }
                navigate('/login', {state:{from:location}, replace:true})
            }
        }
        getUsers()

        return ()=>{
            isMounted = false;
            controller.abort();
        }
    }, [])
  return (
    <article>
      <h2>Users List</h2>
      {
      users?.length
      ? (
        <ul>
            {users.map((user,index)=>(
                <li key={index}>{user?.username}</li>
            ))}
        </ul>
      ) :<p>No Users found</p>
      }
      <button onClick={()=>refresh()}>refresh</button>
      <br/>
    </article>
  )
}

export default Users