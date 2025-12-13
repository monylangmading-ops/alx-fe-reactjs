export default function Login() {


const loginUser = () => {
localStorage.setItem('auth', 'true');
window.location.href = '/profile/details';
};


return (
<div>
<h2 className="text-xl font-bold">Login Page</h2>
<button
onClick={loginUser}
className="bg-blue-600 text-white px-3 py-2 rounded mt-3"
>
Login
</button>
</div>
);
}