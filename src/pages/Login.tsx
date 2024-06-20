import { useState } from 'react'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../services/firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import LoginBtns from '../components/LoginBtns'
import Logo from '../assets/images/Meubel House_Logos-05.png'

const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [emptyField, setEmptyField] = useState(false)
    const navigate = useNavigate()

    const onLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!email || !password) {
            console.error("Please enter both email and password.")
            setEmptyField(true);
            return
        }

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate('/cart')
            console.log(user)
        })
        .catch((error) => {
            console.error("Invalid email or password",error)
        })
    }


  return (
    <div>
        <div className="flex gap-2 pl-14 items-center">
            <img src={Logo} alt="Logotipo da Empresa" className=' w-12 h-8' />
            <span className=" text-4xl font-montserrat-bold">Furniro</span>
        </div>
        <form>                                                                                            
            <div>
                <label htmlFor="email-address">Email address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                    required                                    
                    placeholder="Email address"                                
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required                                 
                    placeholder="Password"              
                />
            </div>                                             
            
            <button
                type="submit" 
                onClick={onLogin}                        
            >  
                Log In                                
            </button>
            <LoginBtns/>                                             
        </form>
        
        <p>
            Don´t have an account?{' '}
            <Link to="/signin" >
                Register
            </Link>
        </p>   

    </div>
  )
}

export default Login