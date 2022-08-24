import { useFormik } from "formik";
import * as yup from "yup";

// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: { email: "abc@gmail.com", password: "123" },
//     onSubmit: (values) => {
//       console.log("Form values", values);
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit} className="user-form">
//       <input
//         name="email"
//         type="email"
//         placeholder="Enter email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//       />
//       <input
//         name="password"
//         type="password"
//         placeholder="Enter password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//       />
//       <button type="submit">Submit</button>
//       <pre>{JSON.stringify(formik.values)}</pre>
//     </form>
//   );
// }
// "Need a bigger email 😄"
const formValidationSchema = yup.object({
  email: yup
    .string()
    .required("Why not fill this email? 😉")
    .min(5, "Need a bigger email 😄")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Pattern not matched 🤔"
    ),
  password: yup
    .string()
    .required("Why not fill this password? 😉")
    .min(8, "Need a bigger password 😄")
    .max(12, "Too much password 😅")
});

export function BasicForm() {
  const {
    handleSubmit, values, handleChange, handleBlur, errors, touched
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
    }
  });
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur} />
      {/* error & touched */}
      {errors.email && touched.email ? errors.email : ""}
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur} />
      {errors.password && touched.password ? errors.password : ""}
      <button type="submit">Submit</button>
      Values
      <pre>{JSON.stringify(values)}</pre>
      Error
      <pre>{JSON.stringify(errors)}</pre>
      Touched
      <pre>{JSON.stringify(touched)}</pre>
    </form>
  );
}
