import React from 'react'
import './Form.scss'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
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
  .min(8, 'Password should be of minimum 8 characters length')
  .required('Password is required')
  .matches((/^([^0-9]*)$/),"dont't allow Numeric Value"),

  }),
onSubmit: (values) => {
alert(values.email+values.password);
},

});
return (
<div className='mains'>
<h1 style={{textAlign:"center"}}>Login Here</h1>

<form className='main' onSubmit={formik.handleSubmit}>

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

variant="standard"
label="Password"
/>

<Button variant="contained" type='submit'>Login</Button>

</form>

</div>
)
}

export default Form;