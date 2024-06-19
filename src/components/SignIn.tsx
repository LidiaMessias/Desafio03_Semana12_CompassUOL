import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebaseConfig'
import { useNavigate, Link } from 'react-router-dom'
import Logo from '../assets/images/Meubel House_Logos-05.png'
import LoginBtns from './LoginBtns'


const SignIn = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const onSubmit =  async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            navigate('/cart')
        })
        .catch((error) => {
            console.error("Error creating acount",error)
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
                    <label htmlFor="email-address">
                        Email address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                        required                                    
                        placeholder="Email address"                                
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>
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
                    onClick={onSubmit}                        
                >  
                    Sign up                                
                </button>
                <LoginBtns/>
                                                                
            </form>
            
            <p>
                Already have an account?{' '}
                <Link to="/login" >
                    Sign in
                </Link>
            </p>   

        </div>
  )
}

export default SignIn
