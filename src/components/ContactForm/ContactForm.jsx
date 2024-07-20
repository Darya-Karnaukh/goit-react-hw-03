import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const onSubmit = (data, actions) => {
    addContact({ id: nanoid(), name: data.name, number: data.number });
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be more than 3 chars!")
      .max(20, "Name must be less than 20 chars"),
    number: Yup.number("It's not a number")
      .typeError("It's not a number")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
