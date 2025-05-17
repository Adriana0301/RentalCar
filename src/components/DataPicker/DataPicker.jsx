import { useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./DataPicker.module.css";

const DatePickerField = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <DatePicker
      selected={values[name]}
      onChange={(val) => setFieldValue(name, val)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking date"
      className={s.datePicker}
    />
  );
};

export default DatePickerField;
