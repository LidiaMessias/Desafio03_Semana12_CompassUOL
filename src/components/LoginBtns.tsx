import React from 'react';
import { FaceAuth, GoogleAuth } from '../services/firebaseConfig';
import { useNavigate, useLocation } from 'react-router-dom';

import face from '../assets/images/FacebookBtn.png'
import google from '../assets/images/Google.png'

const LoginBtns = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const facebookLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const user = await FaceAuth();
        console.log(user)
        navigate(from, { replace: true });
    }

    const googleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const user = await GoogleAuth();
        console.log(user)
        navigate(from, { replace: true });
    }


  return (
    <div className='flex justify-center'>
        <div className='flex gap-15'>
            <button className='flex justify-center items-center w-14 h-14 border border-gray4 rounded-xl ' onClick={facebookLogin}>
                <img src={face} alt="Facebook Logo" />
            </button>
            <button className='flex justify-center items-center border border-gray4 w-14 h-14 rounded-xl ' onClick={googleLogin}>
                <img src={google} alt="Google Logo" />
            </button>
        </div>
    </div>
  )
}

export default LoginBtns