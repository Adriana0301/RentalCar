import { ErrorMessage, Field } from "formik";
import s from "./CarFormInput.module.css";

const CarFormInput = ({ type, name, placeholder }) => {
  const isComment = name === "comment";
  return (
    <>
      <Field
        as={isComment ? "textarea" : "input"}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${s.input} ${isComment ? s.textarea : ""}`}
        required
      />
      {/* <ErrorMessage className={s.error} name={name} component="span" /> */}
    </>
  );
};

export default CarFormInput;
