import { useEffect, useState } from "react";
import { User } from "./User";

export function UserList() {
  const [userlist,setUserList]=useState([])
  useEffect(()=>{
    fetch("https://63f456b355677ef68bb9fd26.mockapi.io/user")
    .then((data)=>data.json())
    .then((use)=>setUserList(use))
  },[])
  return (
    <div className="list">
      {userlist.map((list) => <User key={list.id} id={list.id} user={list} />)}

    </div>
  );
}
