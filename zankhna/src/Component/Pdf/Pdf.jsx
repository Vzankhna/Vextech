import React from 'react';
import './Pdf.scss'
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import jsPDF from 'jspdf';
 
 const Pdf = () => {
 
const generatePdf = (name, mobileNumber) => {
  const pdf = new jsPDF();
  
  // Add border
  pdf.setDrawColor(0); 
  pdf.setLineWidth(0.5);
  pdf.rect(5, 5, 200, 100);
  
  // Add title
  pdf.setFontSize(16);
  pdf.text('Form Data', 10, 20);
  
  // Add form data
  pdf.setFontSize(12);
  pdf.text(name, 10, 40);
  pdf.text(mobileNumber, 10, 50);
  
  pdf.save('form-data.pdf');
};
 
return (
<div className="pdf">
  <Formik
    initialValues={{
    name: '',
    mobileNumber: ''
}}
 validationSchema={Yup.object({
name: Yup.string().required('Name is required'),
mobileNumber: Yup.string().required('Mobile number is required')
 })}
 onSubmit={(values, { resetForm }) => {
generatePdf(values.name, values.mobileNumber);
resetForm();
 }}
  >
 <Form>
<label>
  Name:
  <Field type="text" name="name" />
  <ErrorMessage name="name" component="div" />
</label>
<br />
<label>
  Mobile Number:
  <Field type="tel" name="mobileNumber" />
  <ErrorMessage name="mobileNumber" component="div" />
</label>
<br />
<button type="submit">Submit</button>
 </Form>
  </Formik>
  </div>
);
 };
 
 export default Pdf;