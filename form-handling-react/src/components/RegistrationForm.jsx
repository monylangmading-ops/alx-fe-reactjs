import { useState } from "react";

export default function RegistrationForm() {
const [formData, setFormData] = useState({
username: "",
email: "",
password: "",
});


const { username, email, password } = formData;


const [errorss, setErrors] = useState("");


const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
};


const handleSubmit = (e) => {
e.preventDefault();

if (!username) {
 setErrors("Username is required");
return;
}


if (!email) {
setErrors("Email is required");
return;
}
if (!password) {
setErrors("Password is required");
return;
}
}


setError("");
console.log("Submitting controlled form:", formData);


// mock API simulation
fetch("https://jsonplaceholder.typicode.com/users", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(formData),
})
.then((res) => res.json())
.then((data) => console.log("Mock API Response:", data));
;


return (
<form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md p-4 border rounded-xl">
<h2 className="text-xl font-bold">Controlled Registration Form</h2>


<input
type="text"
name="username"
placeholder="Username"
value={username}
onChange={handleChange}
className="p-2 border rounded"
/>


<input
type="email"
name="email"
placeholder="Email"
value={email}
onChange={handleChange}
className="p-2 border rounded"
/>


<input
type="password"
name="password"
placeholder="Password"
value={password}
onChange={handleChange}
className="p-2 border rounded"
/>


{errors && <p className="text-red-500 text-sm">{errors}</p>}


<button className="bg-blue-600 text-white p-2 rounded">Register</button>
</form>
)};
