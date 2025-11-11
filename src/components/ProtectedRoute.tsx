import { useAuthStore, useIsAuthenticated } from "../features/auth/store/auth.store";
import { Outlet, Navigate } from 'react-router'

function ProtectedRoute(){
    const { isRegister } = useIsAuthenticated();

    const { user } = useAuthStore();

    return (
        isRegister(user) ? <Outlet /> : <Navigate to="/register" />
    )
}

export default ProtectedRoute;