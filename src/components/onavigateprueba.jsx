import {useLocation, Navigate } from 'react-router-dom';

const auth = () => {
    const user = { email: 'correo@mail.com', id: 14};
    return user.id === 15;
};

function RequireAuth({ children }) {
    const location = useLocation();
    const authenticated = auth();
    return authenticated ? (
        children
    ): (
        <Navigate to="/" state={{from: location}} />
    );
}
export default RequireAuth;