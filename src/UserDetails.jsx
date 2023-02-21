import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function UserDetails() {
  const{id} = useParams()
 const [user,setUser]=useState({})
 const getuser=()=>{
  fetch(`https://63f456b355677ef68bb9fd26.mockapi.io/user/${id}`)
  .then((data)=>data.json())
  .then((use)=>setUser(use))
 }
useEffect(()=>getuser(),[])
 
const deleteuser=(id)=>{
  console.log("...deleting",id)
  fetch(`https://63f456b355677ef68bb9fd26.mockapi.io/user/${id}`,{
    method:"DELETE"

  }).then(()=>getuser())
}

const navigate=useNavigate();
  return (
    <div>
    <Card className="userdetail">
      
      <img className="userimg"   src={user.image}/>
      <div className="detail">
      <p> NAME : <span className="span1">{user.name}</span></p>
      <p> AGE : <span className="span1">{user.age}</span> </p>
      <p> EMAIL : <span className="span1">{user.email}</span> </p>
      <p> PHONE : <span className="span1">{user.phone}</span> </p>
      <p> WORK : <span className="span1">{user.work}</span> </p>
      <p> EXPERIANCE : <span className="span1">{user.experiance}</span></p>
      </div>
      <IconButton color="error" onClick={()=>{(deleteuser(user.id)),(navigate("/userlist"))}}><DeleteIcon/></IconButton>
      <IconButton color="primary" onClick={()=>(navigate(`/user/edit/${id}`))}><CreateIcon/></IconButton>
    </Card>
    <div className="button">
    <Button startIcon={<KeyboardBackspaceIcon  />} variant="contained"  onClick={()=>navigate("/userlist")}>back</Button></div>
    </div>
  );
}
