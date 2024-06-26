import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Log.scss'
import MyContext from '../../../Common/Context/MYcontext';

const Log = () => {
  const{setAlert,setMessage,setLoad} = useContext(MyContext)
const formik = useFormik({
initialValues: {
email: '',
password: '',

},
validationSchema:yup.object({
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),

  password: yup
  .string('Enter your password')
  .min(8, 'Enter Correct Password')
  .required('Password is required')
  .matches((/^([^0-9]*)$/),"dont't allow Numeric Value"),
   
  }),
onSubmit:async (values,{resetForm}) => {
// alert(values.email+" "+ values.password);
const response = await fetch ("http://localhost:9000/login",{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
});

const data =await response.json()
if(data.success){
  setAlert(true)
  setMessage(data.message)
  resetForm()
}
else{
  setAlert(true)
  setMessage(data.error)
}
setLoad(false)
},
});
return (
<div className='log'>
<h1>Login</h1>

<form onSubmit={formik.handleSubmit}>

<TextField 
id="email"
name="email"

value={formik.values.email}
onChange={formik.handleChange}
error={formik.touched.email && Boolean(formik.errors.email)}
helperText={formik.touched.email && formik.errors.email} 
label="Email" 
variant="standard" />

<TextField  
id="password"
name="password"

value={formik.values.password}
onChange={formik.handleChange}
error={formik.touched.password && Boolean(formik.errors.password)}
helperText={formik.touched.password && formik.errors.password}
label="Password"
type="password"
autoComplete="current-password"
variant="standard"/>

<Button variant="contained" type='submit'>Login</Button>

</form>

</div>
)
}

export default Log;