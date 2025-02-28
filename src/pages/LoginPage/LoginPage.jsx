import { Field, Form, Formik } from "formik"
import c from './LoginPage.module.css'

const LoginPage = () => {
  const initialValues = {
    email: '',
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

export default LoginPage
