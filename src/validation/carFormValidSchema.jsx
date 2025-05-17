import * as Yup from "yup";

const carFormValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(
      /^(?!.*\.ru$)(?=.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Must be a valid email!"
    )
    .required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string().max(150, "Too Long!"),
});

export default carFormValidSchema;
