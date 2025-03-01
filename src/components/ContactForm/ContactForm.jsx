import { Formik, Form, Field,ErrorMessage } from "formik";
import { useId } from "react"
import c from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

function ContactForm() {

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(3)
    .max(50)
    .matches(/^[a-zA-Zа-яА-Я\s]+$/),
  number: Yup.string()
    .required()
    .matches(/^\d+$/)
    .length(10),
});

  const dispatch = useDispatch();
    const nameId = useId();
    const numberId = useId();
    const initialValues =
    {
        name: "",
        number: ""
  }
  

    const handleSubmit = (values, actions) => {
      dispatch(addContact({
        name: values.name,
        number: values.number,
        id: Date.now()
      }));
      
    actions.resetForm();
  };
  return (
      <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      >
      <Form className={c.formWrapper}> 

<div className={c.fieldWrapper}>
  <label htmlFor={nameId}>Name</label>
  <Field id={nameId} name="name" type="text" className={c.formField} />
  <ErrorMessage name="name" component="div" className={c.error} />
</div>

<div className={c.fieldWrapper}>
  <label htmlFor={numberId}>Number</label>
  <Field id={numberId} name="number" type="text" className={c.formField} />
  <ErrorMessage name="number" component="div" className={c.error} />
</div>

    <button type="submit" className={c.subBTN}>Add Contact</button>
      </Form>
      </Formik>
  )
}

export default ContactForm

