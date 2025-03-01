import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import { toast } from "react-toast";
import { Field, Form, Formik } from "formik";
import c from './RegistrationForm.module.css'


function RegistrationForm() {
     const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    name: '',
    password: '',
  }
  const handleSub = (values, options) => { 
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
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
            <span>Name:</span>
            <Field name='name' className={c.field} />
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
      <NavLink to="/login" className={c.login}>Maybe you have account?   {">"}{">"}Click{"<"}{"<"}  </NavLink>
    
    </div>
  )
}

export default RegistrationForm
