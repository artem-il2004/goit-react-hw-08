import { Field, Form, Formik } from "formik"
import c from './LoginPage.module.css'
import { useDispatch } from "react-redux"
import { loginThunk } from "../../redux/auth/operations";
import { toast } from "react-toast";
import { NavLink, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  }
  const handleSub = (values, options) => { 
    console.log(values);
    dispatch(loginThunk(values)).unwrap()
      .then(() => {
        toast.success('Registration successful');
        navigate('/contacts', {replace : true});
      })
      .catch(() => toast.error('invalid data'));
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
          <button type="submit" className={c.subButton}>Login</button>
        </Form>
      </Formik>

      
      <NavLink to="/register" className={c.login}>Maybe you don't have an account?   {">>"} Click {"<<"}  </NavLink>
    </div>
  )
}

export default LoginPage
