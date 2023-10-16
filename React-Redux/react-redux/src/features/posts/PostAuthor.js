import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectAllUsers } from "../users/usersSlice";

import React from 'react'

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)

    const author = users.find((user)=>user.id === userId);
    
  return <span>by {author? author.name : 'unknown author'}</span>
}

export default PostAuthor