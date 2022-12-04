import React from 'react'
import {useField, ErrorMessage} from 'formik'
import s from './TextField.module.scss'

function TextField({label, ...props}) {
    const [field, meta] = useField(props)
  return (
    <div>
        <label htmlFor={field.name}>{label}</label>
        <input 
          placeholder='text'
          autoComplete='off'
          {...field} {...props}
          className={meta.touched && s.input}
           />
           <ErrorMessage name={field.name}/>
    </div>
  )
}

export default TextField