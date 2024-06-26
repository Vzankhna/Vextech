import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Reg.scss'
import MyContext from '../../../Common/Context/MYcontext';

const Reg = () => {
  const {setAlert,setMessage,setLoad} = useContext(MyContext)
const formik = useFormik({
initialValues: {
na: '',
number: '',
email: '',
password: '',

},
validationSchema:yup.object({
  na:yup
  .string('Enter Your Name')
  .required('Name is required'),

  number:yup
  .string('Enter your Contact number')
  .min(10, 'Enter correct Contact Number')
  .required('Contact Number is required'),

  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),

  password: yup
  .string('Enter your password')
  .min(5, 'Length Should be 5')
  .required('Password is required')
  
  }),
onSubmit: async(values,{resetForm}) => {
  // alert(values.na+values.number+values.email+values.password)
  const response = await fetch('http://localhost:9000/register', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(values),
})
const data = await response.json()
if(data.li==='true'){
  setAlert(true)
  setMessage(data.message)
  // alert(data.message)
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
<div className='reg'>
<h1 style={{marginTop:"10px"}}>Register</h1>

<form onSubmit={formik.handleSubmit}>

<TextField 
id="na"
name="na"

value={formik.values.name}
onChange={formik.handleChange}
error={formik.touched.na && Boolean(formik.errors.na)}
helperText={formik.touched.na && formik.errors.na} 
label="Name" 
variant="standard"
 />

<TextField 
id="number"
name="number"   

value={formik.values.number}
onChange={formik.handleChange}
error={formik.touched.number && Boolean(formik.errors.number)}
helperText={formik.touched.number && formik.errors.number} 
label="Contact Number" 
variant="standard" />

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

<Button variant="contained" type='submit'>Register</Button>

</form>

</div>
)
}

export default Reg;