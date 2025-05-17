import { Formik, Form } from "formik";
import carFormValidSchema from "../../validation/carFormValidSchema";
import s from "./CarForm.module.css";
import CarFormInput from "../CarFormInput/CarFormInput";
import toast from "react-hot-toast";
import DatePickerField from "../DataPicker/DataPicker";
import Button from "../Button/Button";

const CarForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Form submitted successfully!");
      resetForm(); // ✅ ось так
    } catch (e) {
      toast.error(e?.message || "Network Error!");
    }
  };
  return (
    <div className={s.wrapperForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={carFormValidSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={s.form}>
            <div className={s.textWrapper}>
              <h2 className={s.title}>Book your car now</h2>
              <p className={s.text}>
                Stay connected! We are always ready to help you.
              </p>
            </div>
            <div className={s.inputList}>
              <CarFormInput type="text" name="name" placeholder="Name*" />
              <CarFormInput type="email" name="email" placeholder="Email*" />
              <DatePickerField name="bookingDate" />
              <CarFormInput type="text" name="comment" placeholder="Comment" />
            </div>
            <div className={s.wrapperButton}>
              <button className={s.button} type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CarForm;
