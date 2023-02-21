
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { useFormik} from "formik";
import * as yup from "yup";

export function AddUser() {
  const navigate=useNavigate()
 

  const formValidationSchema=yup.object({
    image:yup.string().required().url(),
    name:yup.string().required(),
    age:yup.number().required(),
    email:yup.string().required().email(),
    phone:yup.number().required().min(10),
    work:yup.string().required(),
    experiance:yup.string().required(),
  })
  const {handleBlur,handleChange,handleSubmit,values,touched,errors}=useFormik({
    initialValues:{
      image:"",
      name:"",
      age:"",
      email:"",
      phone:"",
      work:"",
      experiance:"",
    },
    validationSchema:formValidationSchema,
    onSubmit:(newuser)=>{
      Adduser(newuser)
    }
  })
  const Adduser=async(newuser)=>{
await fetch("https://63f456b355677ef68bb9fd26.mockapi.io/user",{
  method:"POST",
  body:JSON.stringify(newuser),
headers:{"Content-Type": "application/json",},
})
navigate("/userlist")
  }
  
  return (
  
<form onSubmit={handleSubmit}>
  <div className="form">
<TextField 
name='image'
onChange={handleChange} 
onBlur={handleBlur}
value={values.image} 
label="image url" 
variant="outlined" 
placeholder="image"
error={touched.image && errors.image}
helperText={touched.image && errors.image?errors.image:null}
/>
<TextField 
name='name'
onChange={handleChange} 
onBlur={handleBlur}
value={values.name} 
label="name" 
variant="outlined" 
placeholder="name"
error={touched.name && errors.name}
helperText={touched.name && errors.name?errors.name:null}

/>
<TextField 
name='age'
onChange={handleChange} 
onBlur={handleBlur}
value={values.age} 
label="age" 
variant="outlined" 
placeholder="age"
error={touched.age && errors.age}
helperText={touched.age && errors.age?errors.age:null}
/>
<TextField 
name='email'
onChange={handleChange} 
onBlur={handleBlur}
value={values.email} 
label="email" 
variant="outlined" 
placeholder="email"
error={touched.email && errors.email}
helperText={touched.email && errors.email?errors.email:null}
/>
<TextField 
name='phone'
onChange={handleChange} 
onBlur={handleBlur}
value={values.phone} 
label="phone" 
variant="outlined" 
placeholder="phone"
error={touched.phone && errors.phone}
helperText={touched.phone && errors.phone?errors.phone:null}
/>
<TextField 
name='work'
onChange={handleChange} 
onBlur={handleBlur}
value={values.work} 
label="work" 
variant="outlined" 
placeholder="work"
error={touched.work && errors.work}
helperText={touched.work && errors.work?errors.work:null}
/>
<TextField 
name='experiance'
onChange={handleChange} 
onBlur={handleBlur}
value={values.experiance} 
label="experiance" 
variant="outlined" 
placeholder="experiance"
error={touched.experiance && errors.experiance}
helperText={touched.experiance && errors.experiance?errors.experiance:null}
/>

<Button type ="submit" variant="contained" color="primary">ADD USER</Button>

</div>
   </form>
  );
}