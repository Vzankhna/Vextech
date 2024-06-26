import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Check.scss'

const Check = () => {
const formik = useFormik({
initialValues: {
na:'',    
email:'',
cnumber:'',
address:'',
number: '',
// dat: '',
cvv:'',

},
validationSchema:yup.object({
  na:yup 
  .string('Enter Full Name')
  .required('Name is Required'),

  cnumber: yup
  .string('Enter your Card Number')
  .required('Card Number is required'),  

  number: yup
  .string('Enter your Card Number')
  .min(16,'Enter Correct Card Number')
  .required('Card Number is required'),
 
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),

  address:yup
  .string('Enter Your Address')
  .required('Address is Requires'),

  dat: yup
  .string('Enter date')
  .required('Enter date'),

   cvv:yup
   .string('Enter CVV')
   .required('Enter CVV')
  
  }),
onSubmit:async (values) => {
// alert(values.na + values.number + values.email+ values.cnumber+ values.dat + values.cvv);
await fetch("http://localhost:9000/checkout",{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify(values)
})
},

});
return (
<div className='check'>
<h1>Checkout</h1>

<form onSubmit={formik.handleSubmit}>

<TextField 
id="na"
name="na"

value={formik.values.na}
onChange={formik.handleChange}
error={formik.touched.na && Boolean(formik.errors.na)}
helperText={formik.touched.na && formik.errors.na} 
label="Full Name" 
variant="standard"
 />

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
id="cnumber"
name="cnumber"   

value={formik.values.cnumber}
onChange={formik.handleChange}
error={formik.touched.cnumber && Boolean(formik.errors.cnumber)}
helperText={formik.touched.cnumber && formik.errors.cnumber} 

label="Enter Your Contact No." 
variant="standard" />

<TextField 
id="address"
name="address"

value={formik.values.address}
onChange={formik.handleChange}
error={formik.touched.address && Boolean(formik.errors.address)}
helperText={formik.touched.address && formik.errors.address} 

label="Address" 
variant="standard"
 />

<TextField 
id="number"
name="number"   

value={formik.values.number}
onChange={formik.handleChange}
error={formik.touched.number && Boolean(formik.errors.number)}
helperText={formik.touched.number && formik.errors.number} 

label="Enter Your Card Number" 
variant="standard" />

<TextField 
id="dat"
name="expirs on"

value={formik.values.dat}
onChange={formik.handleChange}
error={formik.touched.dat && Boolean(formik.errors.dat)}
helperText={formik.touched.dat && formik.errors.dat} 

label="mm/yyyy" 
variant="standard" /> 

<TextField  
id="cvv"
name="cvv"

value={formik.values.cvv}
onChange={formik.handleChange}
error={formik.touched.cvv && Boolean(formik.errors.cvv)}
helperText={formik.touched.cvv && formik.errors.cvv}

label="CVV"
variant="standard"/>

<Button variant="contained" type='submit'>Submit</Button>

</form>

</div>
)
}

export default Check;