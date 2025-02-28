import { Field, Form, Formik } from "formik"
import c from './RegistrationPage.module.css'

const RegistrationPage = () => {
  const initialValues = {
    email: '',
    name: '',
    password: '',
  }
  const handleSub = (values, options) => { 
    console.log(values);
    options.resetForm()
    
  }
  return (
    <div>
      <Formik initialValues={initialValues}
        onSubmit={handleSub}
        > 
        <Form className={ c.allForm}>
          <label className={c.label}>
            <span>Name:</span>
            <Field name='Name' className={c.field} />
          </label>
          <label className={c.label}>
            <span>Email:</span>
            <Field name='email' className={c.field}/>
          </label >
          <label className={c.label}>
            <span>Password:</span>
            <Field name='password' type="password" className={c.field}/>
          </label>
          <button type="submit" className={c.subButton}>Register</button>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage
