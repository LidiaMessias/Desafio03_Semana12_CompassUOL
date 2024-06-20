import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';

const SecureRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user] = useAuthState(auth);

    return user ? children : <Navigate to='/' />;
};

export default SecureRoute;