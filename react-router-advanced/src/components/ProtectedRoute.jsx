import { Navigate, Outlet, } from 'react-router-dom';


const isAuthenticated = () => {
return localStorage.getItem('useAuth') === 'true';
};


export default function ProtectedRoute() {
if (!isAuthenticated()) {
return <Navigate to="/login" replace />;
}


return <Outlet />;
}