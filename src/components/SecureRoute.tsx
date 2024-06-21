import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';

const SecureRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();

    return user ? <>{children}</> : <Navigate to='/login' state={{ from: location }} />;
};

export default SecureRoute;