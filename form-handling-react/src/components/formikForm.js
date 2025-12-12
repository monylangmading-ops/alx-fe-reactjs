import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


export function FormikForm() {
const validationSchema = Yup.object().shape({
username: Yup.string().required("Username is required"),
email: Yup.string().email("Invalid email").required("Email is required"),
password: Yup.string().min(6, "Min 6 characters").required("Password required"),
});


return (
<Formik
initialValues={{ username: "", email: "", password: "" }}
validationSchema={validationSchema}
onSubmit={(values) => {
console.log("Submitting Formik form:", values);


fetch("https://jsonplaceholder.typicode.com/users", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(values),
})
.then((res) => res.json())
.then((data) => console.log("Formik API Response:", data));
}}
>
<Form className="flex flex-col gap-3 max-w-md p-4 border rounded-xl mt-5">
<h2 className="text-xl font-bold">Formik Registration Form</h2>


<Field name="username" placeholder="Username" className="p-2 border rounded" />
<ErrorMessage name="username" component="p" className="text-red-500 text-sm" />


<Field name="email" type="email" placeholder="Email" className="p-2 border rounded" />
<ErrorMessage name="email" component="p" className="text-red-500 text-sm" />


<Field name="password" type="password" placeholder="Password" className="p-2 border rounded" />
<ErrorMessage name="password" component="p" className="text-red-500 text-sm" />


<button className="bg-green-600 text-white p-2 rounded">Register</button>
</Form>
</Formik>
);
}