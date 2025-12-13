import { Navigate, Outlet } from 'react-router-dom';


const isAuthenticated = () => {
return localStorage.getItem('auth') === 'true';
};


export default function ProtectedRoute() {
if (!isAuthenticated()) {
return <Navigate to="/login" replace />;
}


return <Outlet />;
}