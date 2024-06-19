import React from 'react';
import { FaceAuth, GoogleAuth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';

import face from '../assets/images/FacebookBtn.png'
import google from '../assets/images/Google.png'

const LoginBtns = () => {

    const navigate = useNavigate();

    const facebookLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const user = await FaceAuth();
        console.log(user)
        navigate('/cart');
    }

    const googleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const user = await GoogleAuth();
        console.log(user)
        navigate('/cart');
    }


  return (
    <div className='flex gap-4'>
        <button className='flex justify-center items-center w-14 h-14 rounded-xl ' onClick={facebookLogin}>
            <img src={face} alt="Facebook Logo" />
        </button>
        <button className='flex justify-center items-center w-14 h-14 rounded-xl ' onClick={googleLogin}>
            <img src={google} alt="Google Logo" />
        </button>
    </div>
  )
}

export default LoginBtns