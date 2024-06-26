import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Cont.scss'
import MyContext from '../../../Common/Context/MYcontext';

const Cont = () => {
  
const {setAlert,setMessage,setLoad} = useContext(MyContext)
const formik = useFormik({
initialValues: {
na:'',
email: '',
number: '',
message:''

},
validationSchema:yup.object({
  na: yup
  .string('Enter Your Name')
  .required('Name is Required'),

  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),

  number: yup
  .string('Enter your Contact number')
  .min(10, 'Enter correct Contact Number')
  .required('Contact Number is required'),

  message: yup
  .string('Enter Message')
  .min(5, 'Minimum length of message should be 5')
  .required('Message Number is required'),
  }),
onSubmit: async(values,{resetForm}) => {
setLoad(true)
// alert(values.na + values.email+ values.number);
const response = await fetch("http://localhost:9000/contact",{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body: JSON.stringify(values)
})

const data = await response.json()
if(data.li==='true'){
  setAlert(true)
  setMessage(data.message)
  resetForm()
}else{
 setAlert(true)
 setMessage(data.error)
}
setLoad(false)
},

});
return (
<div className='cont'>
<h1>Contact</h1>

<form onSubmit={formik.handleSubmit}>
    
<TextField 
id="na"
name="na"

value={formik.values.na}
onChange={formik.handleChange}
error={formik.touched.na && Boolean(formik.errors.na)}
helperText={formik.touched.na && formik.errors.na} 
label="Name" 
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
id="number"
name="number"   

value={formik.values.number}
onChange={formik.handleChange}
error={formik.touched.number && Boolean(formik.errors.number)}
helperText={formik.touched.number && formik.errors.number} 
label="Contact Number" 
variant="standard" />

<TextField 
id="message"
name="message"   

value={formik.values.message}
onChange={formik.handleChange}
error={formik.touched.message && Boolean(formik.errors.message)}
helperText={formik.touched.message && formik.errors.message} 
label="Message" 
variant="standard" />

<Button variant="contained" type='submit'>Submit</Button>

</form>

</div>
)
}

export default Cont;